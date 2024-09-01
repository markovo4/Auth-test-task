import * as yup from 'yup';

export const recPassSchema = yup.object().shape({
    email: yup.string()
        .required('Email is required')
        .email('Must be a valid email address')
        .max(100, 'Email cannot be more than 100 characters long'),
});
