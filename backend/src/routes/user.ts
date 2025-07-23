import { Hono } from 'hono';
import { userregschema } from '../zod.js';
import jwt from 'jsonwebtoken';
import { JWTPASSWORD } from './config.js';
import { authMiddleware } from '../middlewares/auth.js';
import { PrismaClient } from '@prisma/client';
import { AppContext } from '../types.js';

const prisma = new PrismaClient();
const userRouter = new Hono<{ Variables: { userid: number } }>();

userRouter.post('/signup', async (c) => {
  const body = await c.req.json();
  const uservalidation = userregschema.safeParse(body);

  if (uservalidation.success) {
    const user = await prisma.user.findFirst({
      where: {
        username: uservalidation.data.username,
      },
    });
    
    if (user) {
      return c.json({
        msg: 'User already exists',
      }, 200);
    } else {
      const usercreated = await prisma.user.create({
        data: {
          username: body.username,
          password: body.password,
          firstname: body.firstname,
          lastname: body.lastname,
        },
        select: {
          id: true,
        },
      });

      console.log(usercreated);
      const userid = usercreated.id;

      const token = jwt.sign(
        { userid: userid, username: body.username },
        JWTPASSWORD
      );

      return c.json({
        userId: userid,
        token: token,
      }, 200);
    }
  } else {
    return c.json({
      msg: 'Invalid Data inputs provided',
    }, 200);
  }
});

userRouter.post('/signin', async (c) => {
  const { username, password } = await c.req.json();
  const userverified = await prisma.user.findFirst({
    where: {
      username: username,
      password: password,
    },
  });
  
  console.log(userverified);
  if (userverified == null) {
    return c.json({
      msg: 'invalid username or password',
    }, 200);
  } else {
    const token = jwt.sign(
      { userid: userverified.id, username: username },
      JWTPASSWORD
    );
    return c.json({
      token: token,
    }, 200);
  }
});

userRouter.put('/profile', authMiddleware, async (c: AppContext) => {
  const { password, firstname, lastname, username } = await c.req.json();
  const userid = c.get('userid');

  await prisma.user.update({
    where: { id: userid },
    data: {
      password: password,
      firstname: firstname,
      lastname: lastname,
      username: username,
    },
  });

  return c.json({
    msg: 'Updated successfully',
  }, 200);
});

userRouter.get('/blogs', async (c) => {
  const filter = c.req.query('filter') || '';
  const users = await prisma.user.findMany({
    where: {
      OR: [
        {
          firstname: {
            contains: filter,
            mode: 'insensitive',
          },
        },
        {
          lastname: {
            contains: filter,
            mode: 'insensitive',
          },
        },
        {
          username: {
            contains: filter,
            mode: 'insensitive',
          },
        },
      ],
    },
  });
  
  console.log(users);

  const userss = users.map((u) => ({
    firstname: u.firstname,
    lastname: u.lastname,
    username: u.username,
    _id: u.id,
  }));
  
  return c.json({
    user: userss,
  }, 200);
});

userRouter.get('/profile', authMiddleware, async (c: AppContext) => {
  const userid = c.get('userid');
  const user = await prisma.user.findUnique({
    where: { id: userid },
  });
  
  if (user) {
    return c.json({
      user: user,
    });
  } else {
    return c.json({
      msg: 'No user found',
    });
  }
});

export { userRouter }; 