import zod from "zod";
export const userregschema=zod.object({
    username:zod.email(),
    password:zod.string(),
    firstname:zod.string(),
    lastname:zod.string(),

})
