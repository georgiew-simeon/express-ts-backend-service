// validations/betValidations.ts
import Joi from "joi";

export const betSchema = Joi.object({
    id: Joi.number().integer().positive().optional(),
    event: Joi.string().min(3).max(100).required(),
    contestant: Joi.string().min(3).max(100).required(),
    date: Joi.string().min(3).max(100).required(),
    coefficients: Joi.object({
        win: Joi.number().positive().required(),
        loose: Joi.number().positive().required()
    }).required()
});

export const idSchema = Joi.number().integer().positive().required();
