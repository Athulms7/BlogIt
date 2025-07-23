import { Next } from 'hono';
import { AppContext } from '../types.js';
export declare const authMiddleware: (c: AppContext, next: Next) => Promise<(Response & import("hono").TypedResponse<{
    msg: string;
}, 403, "json">) | undefined>;
//# sourceMappingURL=auth.d.ts.map