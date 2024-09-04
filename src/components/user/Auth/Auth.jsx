import {useState} from "react";
import FormInput from "../../../UI/inputs/FormInput";
import FormCheckBox from "../../../UI/inputs/FormCheckBox";
import FormButton from "../../../UI/buttons/FormButton/index.js";
import styles from './styles.module.scss';
import {loginSchema} from "../../../utils/validationSchemas/auth/loginValidation.js";
import {registrationSchema} from "../../../utils/validationSchemas/auth/registerValidation.js";
import {recPassSchema} from "../../../utils/validationSchemas/auth/recPassValidation.js";

const Auth = () => {

    // const {toasts, showToast} = useToast();

    const [activeForm, setActiveForm] = useState('login');
    const [error, setError] = useState({});
    const [inputValues, setInputValues] = useState({
        login: '',
        email: '',
        password: '',
        passwordConfirm: '',
        rememberMe: false,
    });
    const [resetTrigger, setResetTrigger] = useState(false);

    const handleFormSwitch = (targetForm) => {
        setActiveForm(targetForm);
        setError({});
    };

    const handleInputChange = (e) => {
        const {name, type, checked, value} = e.target;
        setInputValues(prevValues => ({
            ...prevValues,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError({});
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData.entries());

        console.log(formValues)

        try {
            let validationSchema;

            switch (activeForm) {
                case 'login':
                    validationSchema = loginSchema;
                    break;
                case 'register':
                    validationSchema = registrationSchema;
                    break;
                case 'recoverPass':
                    validationSchema = recPassSchema;

                    break;
                default:
                    return;
            }

            switch (validationSchema) {
                case loginSchema:
                    alt.emit('cef::auth:authorization', {
                        login: formValues.login,
                        password: formValues.password,
                        rememberMe: formValues.rememberMe
                    });
                    break;
                case registrationSchema:
                    alt.emit('cef::auth:registration', {
                        login: formValues.login,
                        email: formValues.email,
                        password: formValues.password,
                        passwordConfirm: formValues.passwordConfirm,
                        someOtherProperty: false
                    });
                    break;
                case recPassSchema:
                    alt.emit('cef::auth:recovery', {
                        email: formValues.email
                    });
                    break;
            }


            await validationSchema.validate(formValues, {abortEarly: false});
            setResetTrigger(prev => !prev);
            setInputValues({
                login: '',
                email: '',
                password: '',
                passwordConfirm: '',
                rememberMe: false
            });

        } catch (err) {
            if (err.inner) {
                const errors = err.inner.reduce((acc, error) => {
                    acc[error.path] = error.message;
                    return acc;
                }, {});
                setError(errors);
            }
        }
    };

    const formContent = {
        login: (
            <form className={styles.formLogin} onSubmit={handleSubmit}>
                <FormInput
                    name="login"
                    id="login"
                    label="login"
                    text="Логин"
                    type="text"
                    value={inputValues.login}
                    onChange={handleInputChange}
                    resetTrigger={resetTrigger}
                    errorMessage={error.login || ''}
                />
                <FormInput
                    name="password"
                    id="password"
                    label="password"
                    text="Пароль"
                    type="password"
                    value={inputValues.password}
                    onChange={handleInputChange}
                    resetTrigger={resetTrigger}
                    errorMessage={error.password || ''}
                    password={true}
                />

                <div className={styles.wrapper}>
                    <FormCheckBox
                        id="rememberMe"
                        label="Запомнить меня"
                        onChange={handleInputChange}
                        isChecked={inputValues.rememberMe}
                    />
                    <button
                        id="recoverPass"
                        type="button"
                        name="recoverPass"
                        className={styles.buttonRecover}
                        onClick={() => handleFormSwitch('recoverPass')}
                        aria-label="Forgot your password?"
                    >
                        забыли пароль?
                    </button>
                </div>
                <FormButton
                    id="authorize"
                    type="submit"
                    name="authorize"
                    label="Log in"
                    text="Войти"
                />
                <button
                    id="registerButton"
                    type="button"
                    name="registerButton"
                    className={styles.buttonRegister}
                    onClick={() => handleFormSwitch('register')}
                    aria-label="Register for an account"
                >
                    Нет аккаунта? Зарегистрируйтесь!
                </button>
            </form>

        ),
        register: (
            <form className={styles.formLogin} onSubmit={handleSubmit}>
                <FormInput
                    name="login"
                    id="login"
                    label="login"
                    text="Логин"
                    type="text"
                    value={inputValues.login}
                    onChange={handleInputChange}
                    resetTrigger={resetTrigger}
                    errorMessage={error.login || ''}
                />
                <FormInput
                    name="email"
                    id="email"
                    label="e-mail"
                    text="E-mail"
                    type="text"
                    value={inputValues.email}
                    onChange={handleInputChange}
                    resetTrigger={resetTrigger}
                    errorMessage={error.email || ''}
                />
                <FormInput
                    name="password"
                    id="password"
                    label="password"
                    text="Придумайте пароль"
                    type="password"
                    value={inputValues.password}
                    onChange={handleInputChange}
                    resetTrigger={resetTrigger}
                    errorMessage={error.password || ''}
                    password={true}
                />
                <FormInput
                    name="passwordConfirm"
                    id="passwordConfirm"
                    label="passwordConfirm"
                    text="Повторите пароль"
                    type="password"
                    value={inputValues.passwordConfirm}
                    onChange={handleInputChange}
                    resetTrigger={resetTrigger}
                    errorMessage={error.passwordConfirm || ''}
                    password={true}
                />
                <FormButton
                    id="register"
                    type="submit"
                    name="register"
                    label="Sign up"
                    text="Зарегистрироваться"
                />
                <button
                    id="loginButton"
                    type="button"
                    name="loginButton"
                    className={styles.buttonRegister}
                    onClick={() => handleFormSwitch('login')}
                    aria-label="Authorize in an account"
                >
                    Уже есть аккаунт? Авторизуйтесь!
                </button>
            </form>
        ),
        recoverPass: (
            <form className={styles.formLogin} onSubmit={handleSubmit}>
                <FormInput
                    name="email"
                    id="email"
                    label="e-mail"
                    text="Введите E-mail"
                    type="text"
                    value={inputValues.email}
                    onChange={handleInputChange}
                    resetTrigger={resetTrigger}
                    errorMessage={error.email || ''}
                />
                <FormButton
                    id="recoverPass"
                    type="submit"
                    name="recoverPass"
                    label="Access recover"
                    text="Востановить доступ"
                />
                <button
                    id="backButton"
                    type="button"
                    name="backButton"
                    className={styles.buttonRegister}
                    onClick={() => handleFormSwitch('login')}
                    aria-label="Go back"
                >
                    Назад
                </button>
            </form>
        )
    };

    return (
        <div className={styles.container}>
            {formContent[activeForm]}
        </div>
    );
};

export default Auth;
