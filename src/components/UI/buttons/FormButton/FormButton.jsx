import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const FormButton = ({
                        text,
                        label,
                        type,
                        name,
                        id,
                    }) => {
    return (
        <button
            id={id}
            type={type}
            name={name}
            className={styles.buttonAuth}
            aria-label={label}>
            {text}

        </button>
    )
}

FormButton.propTypes = {
    text: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default FormButton;