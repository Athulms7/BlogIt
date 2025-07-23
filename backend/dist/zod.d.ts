import { z } from 'zod';
export declare const userregschema: z.ZodObject<{
    username: z.ZodString;
    password: z.ZodString;
    firstname: z.ZodString;
    lastname: z.ZodString;
}, "strip", z.ZodTypeAny, {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
}, {
    username: string;
    password: string;
    firstname: string;
    lastname: string;
}>;
export type UserRegSchema = z.infer<typeof userregschema>;
//# sourceMappingURL=zod.d.ts.map