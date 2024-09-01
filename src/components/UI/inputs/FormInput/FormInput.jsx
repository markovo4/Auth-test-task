import {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import PropTypes from "prop-types";

const FormInput = ({id, name, type, text, value, onChange, resetTrigger, errorMessage}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    useEffect(() => {
        setHasValue(value.length > 0);
    }, [value]);

    useEffect(() => {
        if (resetTrigger) {
            setIsFocused(false);
            setHasValue(false);
        }
    }, [resetTrigger]);

    const handleBlur = (e) => {
        setIsFocused(false);
        setHasValue(e.target.value.length > 0);
    };

    return (
        <div className={styles.inputGroup}>
            <label
                className={`${styles.label} 
                ${isFocused || hasValue ? styles.focusedLabel : ''} 
                ${errorMessage ? styles.errorLabel : ''}`}
                htmlFor={id}
            >
                {text}
            </label>
            <input
                value={value}
                className={`${styles.input} ${errorMessage ? styles.inputError : ''}`}
                id={id}
                name={name}
                type={type}
                onFocus={() => setIsFocused(true)}
                onBlur={handleBlur}
                onChange={onChange}
                required
            />
            {errorMessage && <span className={styles.errorMessage}>{errorMessage}</span>}
        </div>
    );
};

FormInput.propTypes = {
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    resetTrigger: PropTypes.bool.isRequired,
    errorMessage: PropTypes.string
};

export default FormInput;
