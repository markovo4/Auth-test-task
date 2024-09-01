import {useEffect, useState} from 'react';
import styles from './styles.module.scss';
import PropTypes from "prop-types";

const FormInput = ({id, name, type, label, text, value, onChange, resetTrigger}) => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const [error, setError] = useState(false);

    useEffect(() => {
        setHasValue(value.length > 0);
        setError(!document.getElementById(id).checkValidity());
    }, [id, value]);


    useEffect(() => {
        if (resetTrigger) {
            setIsFocused(false);
            setHasValue(false);
            setError(false);
        }
    }, [resetTrigger]);

    const handleBlur = (e) => {
        setIsFocused(false);
        setHasValue(e.target.value.length > 0);
        setError(!e.target.checkValidity());
    };

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
                value={value}
                className={`${styles.input}`}
                id={id}
                name={name}
                type={type}
                onFocus={() => setIsFocused(true)}
                onBlur={handleBlur}
                onChange={onChange}
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
    value: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    resetTrigger: PropTypes.bool.isRequired
};

export default FormInput;
