import styles from './styles.module.scss';
import UnektMain from "../../../assets/svg/UnektMain.jsx";
import Unekt from "../../../assets/svg/Unekt.jsx";

const Login = () => {
    return (
        <section className={styles.login}>
            <UnektMain/>
            <Unekt/>
            <div className={styles.loginBackground}/>
            <div className={styles.gtaMen}/>
            <div className={styles.gtaWomen}/>
            <div className={styles.footer}/>
        </section>
    )
}

export default Login;