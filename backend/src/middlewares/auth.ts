import { Context, Next } from 'hono';
import jwt from 'jsonwebtoken';
import { JWTPASSWORD } from '../routes/config.js';
import { JWTPayload, AppContext } from '../types.js';

export const authMiddleware = async (c: AppContext, next: Next) => {
  const auth = c.req.header('authorization');
  
  if (!auth || !auth.startsWith('Bearer ')) {
    return c.json({ msg: 'Invalid token' }, 403);
  }
  
  try {
    const token = auth.split(' ')[1];
    const decode = jwt.verify(token, JWTPASSWORD) as JWTPayload;
    
    if (decode.userid) {
      c.set('userid', decode.userid);
      await next();
    } else {
      return c.json({ msg: 'token error' }, 403);
    }
  } catch (err) {
    return c.json({ err: err }, 403);
  }
}; 