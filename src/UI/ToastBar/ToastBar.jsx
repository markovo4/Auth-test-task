import styles from './styles.module.scss';
import PropTypes from "prop-types";

const ToastBar = ({toasts}) => {
    if (toasts.length === 0) return null;

    return (
        <div className={styles.toastContainer}>
            {toasts.map((toast) => (
                <div key={toast.id} className={styles.container}>
                    <span className={styles.title}>
                        {toast.type === 'success' && 'Успешно!'}
                        {toast.type === 'warning' && 'Оповещение!'}
                        {toast.type === 'error' && 'Ошибка!'}
                        {toast.type === 'info' && 'Внимание!'}
                    </span>
                    <p className={styles.subtitle}>{toast.message}</p>
                    <span className={styles[`${toast.type}Bar`]}/>
                </div>
            ))}
        </div>
    );
};

ToastBar.propTypes = {
    toasts: PropTypes.array
}

export default ToastBar;
