import TemplateAuthPage from "../../../pageTemplates/TemplateAuthPage/index.js";
import {useNavigate} from "react-router-dom";
import routerNames from "../../routes/routerNames.js";

const PageHome = () => {
    const navigate = useNavigate();
    const handleNav = () => {
        navigate(routerNames.pageLogin)
    }
    return (
        <TemplateAuthPage>
            <button onClick={handleNav}>Login</button>
        </TemplateAuthPage>
    )
}

export default PageHome;