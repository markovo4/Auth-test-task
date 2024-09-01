import * as yup from 'yup';

export const recPassSchema = yup.object().shape({
    email: yup.string()
        .required('Электронная почта обязательна')
        .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'Не действительный адрес электронной почты')
        .max(100, 'Не более 100 символов'),
});
