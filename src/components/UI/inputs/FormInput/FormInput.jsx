import {useState} from 'react';
import styles from './styles.module.scss';
import PropTypes from "prop-types";

const FormInput = ({id, name, type, label, text}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const [error, setError] = useState(false);
    const [inputValue, setInputValue] = useState('');


    const handleChange = (e) => {
        setInputValue(e.target.value)
        setError(!e.target.checkValidity());
        setHasValue(e.target.value.length > 0);
    }

    const handleBlur = (e) => {
        setIsFocused(false)
        setHasValue(e.target.value.length > 0);
        setError(!e.target.checkValidity());
    }

    return (
        <div className={styles.inputGroup}>
            <label
                className={`${styles.label} 
                ${isFocused || hasValue ? styles.focusedLabel && error ?
                    styles.focusedErrorLabel : styles.focusedLabel : ''} 
                        ${error ? styles.errorLabel : ''}`}
                htmlFor={label}
            >
                {text}
            </label>
            <input
                value={inputValue}
                className={`${styles.input}`}
                id={id}
                name={name}
                type={type}
                onFocus={() => setIsFocused(true)}
                onBlur={handleBlur}
                onChange={handleChange}
                required
            />
        </div>
    );
};

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
}

export default FormInput;
