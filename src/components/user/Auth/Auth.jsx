import {useState} from "react";
import FormInput from "../../UI/inputs/FormInput";
import FormCheckBox from "../../UI/inputs/FormCheckBox";
import FormButton from "../../UI/buttons/FormButton/index.js";
import styles from './styles.module.scss';

const Auth = () => {
    const [activeForm, setActiveForm] = useState('login');
    const [isChecked, setIsChecked] = useState(false);

    const handleFormSwitch = (targetForm) => {
        setActiveForm(targetForm);
    };

    const handleCheck = () => {
        setIsChecked(!isChecked);
    };

    const formContent = {
        login: (
            <form className={styles.formLogin}>
                <FormInput name="login" id="login" label="login" text="Логин" type="text"/>
                <FormInput name="e-mail" id="e-mail" label="e-mail" text="E-mail" type="email"/>
                <div className={styles.wrapper}>
                    <FormCheckBox id="rememberMe" label="Запомнить меня" onChecked={handleCheck} isChecked={isChecked}/>
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
                <FormButton id="authorize" type="button" name="authorize" onClick={() => {
                }} label="Log in" text="Войти"/>
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
            <form className={styles.formLogin}>
                <FormInput name="login" id="login" label="login" text="Логин" type="text"/>
                <FormInput name="e-mail" id="e-mail" label="e-mail" text="E-mail" type="email"/>
                <FormInput name="password" id="password" label="password" text="Придумайте пароль" type="password"/>
                <FormInput name="passwordConfirm" id="passwordConfirm" label="passwordConfirm" text="Повторите пароль"
                           type="password"/>
                <FormButton id="register" type="button" name="register" onClick={() => {
                }} label="Sign up" text="Зарегистрироваться"/>
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
            <form className={styles.formLogin}>
                <FormInput name="e-mail" id="e-mail" label="e-mail" text="Введите E-mail" type="email"/>
                <FormButton id="recoverPass" type="button" name="recoverPass" onClick={() => {
                }} label="Access recover" text="Востановить доступ"/>
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
