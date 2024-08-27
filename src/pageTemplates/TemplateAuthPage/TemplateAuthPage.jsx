import PropTypes from "prop-types";

const TemplateAuthPage = ({className = null, children}) => {
    return (
        <main className={className}>
            {children}
        </main>
    )
}

TemplateAuthPage.propTypes = {
    className: PropTypes.string,
    children: PropTypes.object.isRequired
}

export default TemplateAuthPage;