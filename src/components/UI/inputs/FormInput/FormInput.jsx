import {useState} from 'react';
import styles from './styles.module.scss';

const FormInput = () => {
    const [isFocused, setIsFocused] = useState(false);
    const [hasValue, setHasValue] = useState(false);

    return (
        <div className={styles.inputGroup}>
            <label
                className={`${styles.label} ${isFocused || hasValue ? styles.focusedLabel : ''}`}
                htmlFor="username"
            >
                Username
            </label>
            <input
                className={styles.input}
                id="username"
                name="username"
                type="text"
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                onChange={(e) => setHasValue(e.target.value.length > 0)}
            />
        </div>
    );
};

export default FormInput;
