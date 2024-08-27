import routerNames from "./routerNames";
import PageLogin from "../pages/PageLogin/index.js";
import PageRegister from "../pages/PageRegister/index.js";
import PageRecoverPass from "../pages/PageRecoverPass/index.js";


const routerConfig = () => {
    const pageComponents = [PageLogin, PageRegister, PageRecoverPass];
    const routeKeys = Object.keys(routerNames);

    if (pageComponents.length !== routeKeys.length) {
        console.error("The number of routes and components do not match.");
        return [];
    }

    return pageComponents.map((pageComponent, index) => {
        const keyName = routeKeys[index];
        return {
            path: routerNames[keyName],
            component: pageComponent,
            id: index,
        }
    });
}

export default routerConfig;