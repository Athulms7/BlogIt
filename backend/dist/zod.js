import { z } from 'zod';
export const userregschema = z.object({
    username: z.string().email(),
    password: z.string(),
    firstname: z.string(),
    lastname: z.string(),
});
//# sourceMappingURL=zod.js.map