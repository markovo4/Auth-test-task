import PropTypes from "prop-types";
import styles from "./styles.module.scss";

const TemplateAuthPage = ({children}) => {
    return (
        <main className={styles.login}>
            <div className={styles.logo}/>
            <div className={styles.loginBackground}/>
            <div className={styles.gtaMen}/>
            <div className={styles.gtaWomen}/>
            <div className={styles.footer}/>
            {children}
        </main>
    )
}

TemplateAuthPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.object.isRequired
}

export default TemplateAuthPage;