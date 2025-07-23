import { serve } from '@hono/node-server';
import app from './index.js';
const port = 3001;
console.log(`Server is running on port ${port}`);
serve({
    fetch: app.fetch,
    port,
});
//# sourceMappingURL=server.js.map