import TemplateAuthPage from "../../../pageTemplates/TemplateAuthPage/index.js";
import {useNavigate} from "react-router-dom";
import routerNames from "../../routes/routerNames.js";
import styles from './styles.module.scss';

const PageHome = () => {
    const navigate = useNavigate();
    const handleNav = () => {
        navigate(routerNames.pageLogin)
    }
    return (
        <TemplateAuthPage>
            <button onClick={handleNav} className={styles.button}>Login</button>
        </TemplateAuthPage>
    )
}

export default PageHome;