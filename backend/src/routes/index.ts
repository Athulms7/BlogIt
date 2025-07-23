import { Hono } from 'hono';
import { userRouter } from './user.js';
import { blogRouter } from './blog.js';

const mainRouter = new Hono();

mainRouter.route('/user', userRouter);
mainRouter.route('/blog', blogRouter);

export { mainRouter }; 