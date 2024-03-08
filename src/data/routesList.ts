import Home from "../Pages/Home";
import New from "../Pages/New";
import Ticket from "../Pages/TicketPage";
import Contact from "../Pages/Contact";
import Login from "../Pages/Login";
import History from "../Pages/History";
import CheckOut from "../Pages/CheckOut";
import SeaImg from "../components/SeaImg";
import NewChildrenOne from "../Pages/NewChildrenOne";
import NewChildrenTwo from "../Pages/NewChildrenTwo";
import NewChildrenThree from "../Pages/NewChildrenThree";

interface BaseProps {
    id: number;
    path: string;
    element: () => JSX.Element;
}
interface Routes extends  BaseProps {
    layout?: () => JSX.Element;
    nested?: BaseProps[]
}

const publicRoutes: Routes[] = [
    {id: 1, path: '/', element: Home},
    {id: 2, path: '/New', element: New},
    {id: 3, path: '/Ticket', element: Ticket},
    {id: 4, path: '/History', element: History},
    {id: 5, path: '/CheckOut', element: CheckOut},
    {id: 6, path: '/Contact', element: Contact},
    {id: 7, path: '/SeaImg', element: SeaImg},
    {id: 8, path: '/Login', element: Login},
    {id: 9, path: '/NewChildrenOne', element: NewChildrenOne},
    {id: 10, path: '/NewChildrenTwo', element: NewChildrenTwo},
    {id: 11, path: '/NewChildrenThree', element: NewChildrenThree},
]

//Private routes
const privateRoutes: Routes[] = [];

export {
    publicRoutes,
    privateRoutes
}