import * as yup from 'yup';

export const loginSchema = yup.object().shape({
    login: yup.string()
        .required('Логин обязателен')
        .min(4, 'Логин должен содержать не менее 4 символов')
        .max(50, 'Логин не может содержать более 50 символов'),

    password: yup.string()
        .required('Пароль обязателен')
        .min(8, 'Не менее 8 символов')
        .max(100, 'Не более 100 символов')
        .matches(/[A-Z]/, 'Нужна хотя бы одна заглавная буква')
        .matches(/[a-z]/, 'Нужна хотя бы одна строчная буква')
        .matches(/[0-9]/, 'Нужна хотя бы одна цифра')
        .matches(/[@$!%*?&#]/, 'Нужен хотя бы один специальный символ'),
});
