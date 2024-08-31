import FormInput from "../../UI/inputs/FormInput";
import styles from './styles.module.scss';
import {useState} from "react";

const Login = () => {

    const [login, setLogin] = useState(true);
    const [register, setRegister] = useState(false);
    const [recoverPass, setRecoverPass] = useState(false);

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

    return (
        <div className={styles.container}>
            {login && <form className={styles.formLogin}>
                <FormInput/>
                <FormInput/>

                <div className={styles.wrapper}>
                    <div className={styles.inputGroup}>
                        <input type="checkbox" id="rememberMe" className={styles.formCheckBox}/>
                        <label htmlFor="rememberMe" className={styles.checkBoxLabel}>Запомнить меня</label>
                    </div>


                    <button
                        id="recoverPass"
                        type="button"
                        name="recoverPass"
                        className={styles.buttonRegister}
                        onClick={handleClick}
                        aria-label="Forgot your password?">
                        забыли пароль?
                    </button>
                </div>

                <button
                    id="authorize"
                    type="button"
                    name="authorize"
                    className={styles.buttonAuth}
                    onClick={handleClick}
                    aria-label="Log in">
                    Войти
                </button>

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
                <FormInput/>
                <FormInput/>
                <FormInput/>
                <FormInput/>

                <button
                    id="register"
                    type="button"
                    name="register"
                    className={styles.buttonAuth}
                    onClick={handleClick}
                    aria-label="Sign up">
                    Зарегистрироваться
                </button>

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
                <FormInput/>

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

export default Login;