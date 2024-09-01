import {useState} from "react";
import FormInput from "../../UI/inputs/FormInput";
import FormCheckBox from "../../UI/inputs/FormCheckBox";
import FormButton from "../../UI/buttons/FormButton/index.js";
import styles from './styles.module.scss';

const Auth = () => {
    const [activeForm, setActiveForm] = useState('login');
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
    };

    const handleInputChange = (e) => {
        const {name, type, checked, value} = e.target;
        setInputValues(prevValues => ({
            ...prevValues,
            [name]: type === 'checkbox' ? checked : value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const formValues = Object.fromEntries(formData.entries());
        console.log(`Form: ${activeForm}`, formValues);

        // Reset form inputs
        setInputValues({
            login: '',
            email: '',
            password: '',
            passwordConfirm: '',
            rememberMe: false
        });
        setResetTrigger(prev => !prev);
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
                />
                <FormInput
                    name="email"
                    id="email"
                    label="e-mail"
                    text="E-mail"
                    type="email"
                    value={inputValues.email}
                    onChange={handleInputChange}
                    resetTrigger={resetTrigger}
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
                />
                <FormInput
                    name="email"
                    id="email"
                    label="e-mail"
                    text="E-mail"
                    type="email"
                    value={inputValues.email}
                    onChange={handleInputChange}
                    resetTrigger={resetTrigger}
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
                    type="email"
                    value={inputValues.email}
                    onChange={handleInputChange}
                    resetTrigger={resetTrigger}
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
