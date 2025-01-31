import Joi from 'joi'

const schema = Joi.object({
    codigo: Joi.string().min(3).required(),
    nome: Joi.string().max(100).required(),
    ch: Joi.number().required(),
    professor: Joi.string().optional()
})


export default schema