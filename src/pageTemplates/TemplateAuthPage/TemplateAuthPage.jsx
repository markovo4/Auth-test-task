import PropTypes from "prop-types";
import styles from './styles.module.scss'

const TemplateAuthPage = ({className, children}) => {
    return (
        <main className={`${styles.login} ${className || ''}`}>
            {children}
            <div className={styles.logo}/>
            <div className={styles.loginBackground}/>
            <div className={styles.gtaMen}/>
            <div className={styles.gtaWomen}/>
            <div className={styles.footer}/>
        </main>
    );
};

TemplateAuthPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired
};

export default TemplateAuthPage;
