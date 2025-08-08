export const userregschema=zod.object({
    username:zod.string().email(),
    password:zod.string(),
    firstname:zod.string(),
    lastname:zod.string(),

})

