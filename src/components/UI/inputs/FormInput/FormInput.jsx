import {useState} from 'react';
import styles from './styles.module.scss';

const FormInput = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (e) => {
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
                className={`${styles.label} ${isFocused || hasValue ? styles.focusedLabel : ''} ${error ? styles.errorLabel : ''}`}
                htmlFor="username"
            >
                Username
            </label>
            <input
                className={`${styles.input} ${error ? styles.errorInput : ''}`}
                id="username"
                name="username"
                type="text"
                onFocus={() => setIsFocused(true)}
                onBlur={handleBlur}
                onChange={handleChange}
                required
            />
        </div>
    );
};

export default FormInput;
