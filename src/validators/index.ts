import Joi from "joi";

const registerSchema = Joi.object({
    name: Joi.string().min(6).max(30).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).max(16).pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')),
    repeat_password: Joi.ref('password')
})
// to use ==>const { error } = registerSchema.validate(req.body);
export default registerSchema;