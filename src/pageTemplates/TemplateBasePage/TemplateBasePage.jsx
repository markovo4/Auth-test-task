import PropTypes from "prop-types";
import styles from './styles.module.scss';

const TemplateBasePage = ({children}) => {
    return (
        <>
            <main className={styles.main}>
                {children}
            </main>
        </>
    )
}

TemplateBasePage.propTypes = {
    children: PropTypes.node.isRequired,
}

export default TemplateBasePage;