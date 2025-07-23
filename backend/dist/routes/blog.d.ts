import { Hono } from 'hono';
declare const blogRouter: Hono<{
    Variables: {
        userid: number;
    };
}, import("hono/types").BlankSchema, "/">;
export { blogRouter };
//# sourceMappingURL=blog.d.ts.map