import { Router } from "express";
import { userRouter } from "./user.js";
export const mainRouter=Router();
import { blogRouter } from "./blog.js";

mainRouter.use("/user",userRouter);
mainRouter.use("/blog",blogRouter);


