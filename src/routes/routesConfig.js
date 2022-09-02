import PeoplePage from "../containers/PeoplePage"
import HomePage from "../containers/HomePage/HomePage"
import PersonPage from "../containers/PersonPage/PersonPage";

const routesConfig = [
    {
        path: '/',
        element: <HomePage />     
    },
    {
        path: '/people',
        element: <PeoplePage />     
    },
    {
        path: '/people/:id',
        element: <PersonPage />     
    }
];

export default routesConfig;