import styles from "./styles.module.scss";
import PropTypes from "prop-types";

const FormButton = ({
                        onClick,
                        text,
                        label,
                        type,
                        name,
                        id,
                    }) => {

    const handleClick = (e) => {
        const {name} = e.target;
        onClick(name)
    }
    return (
        <button
            id={id}
            type={type}
            name={name}
            className={styles.buttonAuth}
            onClick={handleClick}
            aria-label={label}>
            {text}

        </button>
    )
}

FormButton.propTypes = {
    onClick: PropTypes.func.isRequired,
    text: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    id: PropTypes.string.isRequired,
}

export default FormButton;