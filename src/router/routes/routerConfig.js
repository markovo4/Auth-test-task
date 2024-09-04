import routerNames from "./routerNames";
import PageAuth from "../pages/PageAuth/index.js";
import PageHome from "../pages/PageHome/index.js";
import PageCharacterSelect from "../pages/PageCharacterSelect";
import PageSpawnSelect from "../pages/PageSpawnSelect";


const routerConfig = () => {
    const pageComponents = [PageHome, PageAuth, PageCharacterSelect, PageSpawnSelect];
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