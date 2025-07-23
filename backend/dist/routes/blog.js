import { Hono } from 'hono';
import { authMiddleware } from '../middlewares/auth.js';
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();
const blogRouter = new Hono();
blogRouter.get('/blog', authMiddleware, async (c) => {
    const userid = c.get('userid');
    const blog = await prisma.blogs.findMany({
        where: { userid: userid },
    });
    if (!blog) {
        return c.json({ error: 'Blog not found' }, 404);
    }
    const user = await prisma.user.findUnique({
        where: { id: userid },
    });
    return c.json({
        blog: blog,
        user: user,
    }, 200);
});
blogRouter.post('/createblog', authMiddleware, async (c) => {
    const { title, description, imageurl } = await c.req.json();
    const userid = c.get('userid');
    const blog = await prisma.blogs.create({
        data: {
            userid: userid,
            title: title,
            descprition: description,
            imageurl: imageurl,
            date: new Date()
        },
    });
    if (!blog) {
        return c.json({ error: 'Blog not found' }, 404);
    }
    const user = await prisma.user.findUnique({
        where: { id: userid },
    });
    return c.json({
        blog: blog,
        user: user,
    }, 200);
});
blogRouter.get('/blogss', authMiddleware, async (c) => {
    const blog = await prisma.blogs.findMany({
        include: {
            user: true,
        },
    });
    if (!blog) {
        return c.json({ error: 'Blog not found' }, 404);
    }
    return c.json({
        blog: blog,
    }, 200);
});
blogRouter.delete('/delete', authMiddleware, async (c) => {
    const { id } = await c.req.json();
    const blog = await prisma.blogs.delete({
        where: {
            id: id,
        },
    });
    if (!blog) {
        return c.json({ error: 'Blog not found' }, 404);
    }
    const user = await prisma.user.findUnique({
        where: { id: c.get('userid') },
    });
    return c.json({
        msg: 'Deleted',
    }, 200);
});
blogRouter.post('/blogs', authMiddleware, async (c) => {
    const { id } = await c.req.json();
    const blog = await prisma.blogs.findUnique({
        where: {
            id,
        },
        include: {
            user: true,
        },
    });
    if (!blog) {
        return c.json({ error: 'Blog not found' }, 404);
    }
    return c.json({
        blog: blog,
    }, 200);
});
export { blogRouter };
//# sourceMappingURL=blog.js.map