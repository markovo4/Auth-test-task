import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const FormCheckBox = ({id, label, onChecked, isChecked}) => {
    const handleChecked = () => {
        onChecked(id)
    }

    return (
        <div className={styles.inputGroup}>
            <input type="checkbox" id={id} className={styles.formCheckBox} checked={isChecked}
                   onChange={handleChecked}/>
            <label htmlFor={id} className={styles.checkBoxLabel}>{label}</label>
        </div>
    )
}

FormCheckBox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChecked: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
}

export default FormCheckBox;