import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const FormCheckBox = ({id, label, onChange, isChecked}) => {

    const handleChange = (e) => {
        onChange(e);
    }

    return (
        <div className={styles.inputGroup}>
            <input type="checkbox" id={id} name={id} className={styles.formCheckBox} checked={isChecked}
                   onChange={handleChange}/>
            <label htmlFor={id} className={styles.checkBoxLabel}>{label}</label>
        </div>
    )
}

FormCheckBox.propTypes = {
    id: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    isChecked: PropTypes.bool.isRequired,
}

export default FormCheckBox;