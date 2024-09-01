import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    login: yup.string()
        .required('Login is required')
        .min(4, 'Login must be at least 4 characters long')
        .max(50, 'Login cannot be more than 50 characters long'),

    password: yup.string()
        .required('Password is required')
        .min(8, 'Password must be at least 8 characters long')
        .max(100, 'Password cannot be more than 100 characters long')
        .matches(/[A-Z]/, 'Password must contain at least one uppercase letter')
        .matches(/[a-z]/, 'Password must contain at least one lowercase letter')
        .matches(/[0-9]/, 'Password must contain at least one number')
        .matches(/[@$!%*?&#]/, 'Password must contain at least one special character'),
});
