import { Router } from "express";
import { authMiddleware } from "../middlewares/auth.js";

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export const blogRouter = Router();

blogRouter.get("/blog", authMiddleware, async (req, res) => {
  
  const blog = await prisma.blogs.findMany({where:{ userid: req.userid }});
  if (!blog) {
    return res.status(404).json({ error: "Blog not found" });
  }
  const user = await prisma.user.findUnique({where:{ id: req.userid }});
  res.status(200).json({
    blog: blog,
    user: user,
  });
});

blogRouter.post("/createblog", authMiddleware, async (req, res) => {
  const { title, description,imageurl } = req.body;
  const blog = await prisma.blogs.create({
    data: { userid: req.userid, title: title, descprition: description,imageurl:imageurl,date: new Date() },
  });
  if (!blog) {
    return res.status(404).json({ error: "Blog not found" });
  }
  const user = await prisma.user.findUnique({where:{ id: req.userid }});
  res.status(200).json({
    blog: blog,
    user: user,
  });
});

blogRouter.get("/blogss", authMiddleware, async (req, res) => {
  const blog = await prisma.blogs.findMany({include:{
    user:true,
  }});
  if (!blog) {
    return res.status(404).json({ error: "Blog not found" });
  }
 
  res.status(200).json({
    blog: blog,
  });
});


blogRouter.delete("/delete", authMiddleware, async (req, res) => {
  const id = req.body.id;
  const blog = await prisma.blogs.delete({
    where:{
      id:id
    }
  });
  if (!blog) {
    return res.status(404).json({ error: "Blog not found" });
  }
  const user = await prisma.user.findUnique({where:{ id: req.userid }});
  res.status(200).json({
    msg:"Deleted"
  });
});


blogRouter.post("/blogs", authMiddleware, async (req, res) => {
  const { id } = req.body;

const blog = await prisma.blogs.findUnique({
  where: {
    id,
  },
  include: {
    user: true,
  },
});

  if (!blog) {
    return res.status(404).json({ error: "Blog not found" });
  }
 
  res.status(200).json({
    blog: blog,
  });
});