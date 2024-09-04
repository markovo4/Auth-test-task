import PropTypes from "prop-types";
import styles from './styles.module.scss';

const TemplateAuthPage = ({children}) => {
    return (
        <>
            <main className={styles.main}>
                {children}
            </main>
            <div className={styles.logo}/>
            <div className={styles.bodyLeft}/>
            <div className={styles.bodyRight}/>
            <div className={styles.footer}/>
            <div className={styles.html}/>
            <div className={styles.body}/>
        </>
    );
};

TemplateAuthPage.propTypes = {
    children: PropTypes.node.isRequired,
};

export default TemplateAuthPage;
