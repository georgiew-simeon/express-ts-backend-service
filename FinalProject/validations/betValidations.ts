import Joi from "joi";

export const betSchema = Joi.object({
    id: Joi.number().integer().positive().optional(),
    eventId: Joi.number().integer().positive().required(),
    amount: Joi.number().positive().required(),
    placedBy: Joi.string().min(3).max(100).required(),
    placedAt: Joi.string().isoDate().required()
});

export const idSchema = Joi.number().integer().positive().required();
