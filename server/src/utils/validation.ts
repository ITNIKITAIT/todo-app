import { body } from 'express-validator';

export const registerValidation = [
    body('name')
        .isString()
        .isLength({ min: 2 })
        .withMessage('Name must be more than 2 symbols'),
    body('email').isEmail().withMessage('Incorrect email'),
    body('password')
        .isLength({ min: 6 })
        .withMessage('Password must be more than 6 symbols'),
];
