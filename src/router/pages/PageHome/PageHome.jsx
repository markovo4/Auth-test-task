import {useNavigate} from "react-router-dom";
import routerNames from "../../routes/routerNames.js";
import styles from './styles.module.scss';
import TemplateBasePage from "../../../pageTemplates/TemplateBasePage/index.js";

const PageHome = () => {
    const navigate = useNavigate();
    const handleNav = () => {
        navigate(routerNames.pageLogin)
    }
    return (
        <TemplateBasePage>
            <button onClick={handleNav} className={styles.button}>Login</button>
        </TemplateBasePage>
    )
}

export default PageHome;