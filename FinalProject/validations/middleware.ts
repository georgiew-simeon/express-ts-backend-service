// validations/middleware.ts
import { Request, Response, NextFunction } from "express";
import Joi, { Schema } from "joi";

// Middleware for validating request body
export const validateBody = (schema: Schema) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.body, { abortEarly: false });
        if (error) {
            return res.status(400).json({ errors: error.details.map(d => d.message) });
        }
        next();
    };
};

// Middleware for validating request params
export const validateParams = (schema: Schema, param: string) => {
    return (req: Request, res: Response, next: NextFunction) => {
        const { error } = schema.validate(req.params[param]);
        if (error) {
            return res.status(400).json({ errors: [error.message] });
        }
        next();
    };
};
