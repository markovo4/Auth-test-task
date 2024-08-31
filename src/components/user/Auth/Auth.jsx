import FormInput from "../../UI/inputs/FormInput";
import styles from './styles.module.scss';
import {useState} from "react";
import FormCheckBox from "../../UI/inputs/FormCheckBox";
import FormButton from "../../UI/buttons/FormButton/index.js";

const Auth = () => {

    const [login, setLogin] = useState(true);
    const [register, setRegister] = useState(false);
    const [recoverPass, setRecoverPass] = useState(false);
    const [checked, setChecked] = useState(false)

    const handleClick = (e) => {
        const {name} = e.target;
        if (name === 'registerButton') {
            setLogin(!login)
            setRegister(!register)
        } else if (name === 'loginButton') {
            setLogin(!login)
            setRegister(!register)
        } else if (name === 'backButton') {
            setLogin(!login)
            setRecoverPass(!recoverPass)
        } else if (name === 'recoverPass') {
            setLogin(!login)
            setRecoverPass(!recoverPass)
        }
    }

    const handleCheck = (id) => {
        if (id === 'rememberMe') {
            setChecked(!checked)
        }
    }

    return (
        <div className={styles.container}>
            {login && <form className={styles.formLogin}>
                <FormInput
                    name={'login'}
                    id={'login'}
                    label={'login'}
                    text={'Логин'}
                    type={'text'}
                />

                <FormInput
                    name={'e-mail'}
                    id={'e-mail'}
                    label={'e-mail'}
                    text={'E-mail'}
                    type={'email'}
                />

                <div className={styles.wrapper}>
                    <FormCheckBox
                        id={'rememberMe'}
                        label={'Запомнить меня'}
                        onChecked={handleCheck}
                        isChecked={checked}
                    />

                    <button
                        id="recoverPass"
                        type="button"
                        name="recoverPass"
                        className={styles.buttonRecover}
                        onClick={handleClick}
                        aria-label="Forgot your password?">
                        забыли пароль?
                    </button>
                </div>

                <FormButton
                    onClick={handleClick}
                    text={'Войти'}
                    label={'Log in'}
                    type={'button'}
                    name={'authorize'}
                    id={'authorize'}
                />

                <button
                    id="registerButton"
                    type="button"
                    name="registerButton"
                    className={styles.buttonRegister}
                    onClick={handleClick}
                    aria-label="Register for an account">
                    Нет аккаунта? Зарегистрируйтесь!
                </button>

            </form>}

            {register && <form className={styles.formLogin}>
                <FormInput
                    name={'login'}
                    id={'login'}
                    label={'login'}
                    text={'Логин'}
                    type={'text'}
                />
                <FormInput
                    name={'e-mail'}
                    id={'e-mail'}
                    label={'e-mail'}
                    text={'E-mail'}
                    type={'email'}
                />
                <FormInput
                    name={'password'}
                    id={'password'}
                    label={'password'}
                    text={'Придумайте пароль'}
                    type={'password'}
                />
                <FormInput
                    name={'passwordConfirm'}
                    id={'passwordConfirm'}
                    label={'passwordConfirm'}
                    text={'Повторите пароль'}
                    type={'password'}
                />

                <FormButton
                    id={'register'}
                    type={'button'}
                    name={'register'}
                    onClick={handleClick}
                    label={'Sign up'}
                    text={'Зарегистрироваться'}
                />

                <button
                    id="loginButton"
                    type="button"
                    name="loginButton"
                    className={styles.buttonRegister}
                    onClick={handleClick}
                    aria-label="Authorize in an account">
                    Уже есть аккаунт? Авторизуйтесь!
                </button>
            </form>}

            {recoverPass && <form className={styles.formLogin}>
                <FormInput
                    name={'e-mail'}
                    id={'e-mail'}
                    label={'e-mail'}
                    text={'Введите E-mail'}
                    type={'email'}
                />


                <FormButton
                    id={'recoverPass'}
                    type={'button'}
                    name={'recoverPass'}
                    onClick={handleClick}
                    label={'Access recover'}
                    text={'Востановить доступ'}
                />

                <button
                    id="backButton"
                    type="button"
                    name="backButton"
                    className={styles.buttonRegister}
                    onClick={handleClick}
                    aria-label="Go back">
                    Назад
                </button>
            </form>}
        </div>
    )
}

export default Auth;