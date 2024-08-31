import PropTypes from "prop-types";
import styles from './styles.module.scss';

const TemplateAuthPage = ({className, children}) => {
    return (
        <>
            <main>
                {children}
            </main>
            <div className={styles.logo}/>
            <div className={styles.bodyLeft}/>
            <div className={styles.bodyRight}/>
            <div className={styles.footer}/>
        </>
    );
};

TemplateAuthPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.node.isRequired,
};

export default TemplateAuthPage;


// <main className={`${styles.login} ${className || ''}`}>
//     <div className={styles.logo}/>
//     <div className={styles.loginBackground}/>
//     <div className={styles.gtaMen}/>
//     <div className={styles.gtaWomen}/>
//     <div className={styles.footer}/>
//     {children} {/* Children should be inside the main container */}
// </main>