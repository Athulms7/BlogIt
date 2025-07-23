import { z } from 'zod';

export const userregschema = z.object({
    username: z.string().email(),
    password: z.string(),
    firstname: z.string(),
    lastname: z.string(),
});

export type UserRegSchema = z.infer<typeof userregschema>; 