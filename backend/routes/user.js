import { Router } from "express";
import { userregschema } from "../zod.js";

import jwt, { decode } from "jsonwebtoken";
import { JWTPASSWORD } from "./config.js";
import { authMiddleware } from "../middlewares/auth.js";

export const userRouter = Router();
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

userRouter.post("/signup", async function (req, res) {
  const uservalidation = userregschema.safeParse(req.body);

  if (uservalidation.success) {
    const user = await prisma.user.findFirst({
      where: {
        username: uservalidation.data.username,
      },
    });
    
    if (user) {
      return res.status(200).json({
        msg: "User already exists",
      });
    }else{
      
      const usercreated = await prisma.user.create({data:{
        username: req.body.username,
        password: req.body.password,
        firstname: req.body.firstname,
        lastname: req.body.lastname,
      },select:{
        id:true,
      }});

 console.log(usercreated);
      const userid = usercreated.id;

      const token = jwt.sign(
        { userid: userid, username: req.body.username },
        JWTPASSWORD
      );

      res.status(200).json({
        userId: userid,
        token: token,
      });
    }
  } else {
    res.status(200).json({
      msg: "Invalid Data inputs provided",
    });
  }
}); //app/v1/user/signup

userRouter.post("/signin", async (req, res) => {
  const { username, password } = req.body;
  const userverified = await prisma.user.findFirst({where:{
     username: username,
    password: password,
  },
  });
console.log(userverified);
  if (userverified==null) {
    res.status(200).json({
      msg: "invalid username or password",
    });
  } else {
    const token = jwt.sign(
      { userid: userverified.id, username: username },
      JWTPASSWORD
    );
    res.status(200).json({
      token: token,
    });
  }
});

userRouter.put("/profile", authMiddleware, async (req, res) => {
  const { password, firstname, lastname, username } = req.body;

  const user = await prisma.user.update({
   where: { id: req.userid },
    data:{
      password: password,
      firstname: firstname,
      lastname: lastname,
      username: username,
    }
});

  res.status(200).json({
    msg: "Updated succesfully",
  });
});

userRouter.get("/blogs", async (req, res) => {
  const filter = req.query.filter || "";
const users = await prisma.user.findMany({
  where: {
    OR: [
      {
        firstname: {
          contains: filter,
          mode: 'insensitive', // optional: case-insensitive search
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
    _id: u._id,
  }));
  res.status(200).json({
    user: userss,
  });
});

userRouter.get("/profile", authMiddleware, async (req, res) => {
  const user = await prisma.user.findMany({where:{ id: req.userid }});
  if (user) {
    return res.json({
      user: user[0],
    });
  } else {
    return res.json({
      msg: "No user found",
    });
  }
});
