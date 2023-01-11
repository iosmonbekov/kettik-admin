import { createBrowserRouter } from "react-router-dom";

import { 
    SignIn,
    SignUp,
} from '../pages'

const router = createBrowserRouter([
    {
        path: '/sign-in',
        element: <SignIn />,
    },
    {
        path: '/sign-up',
        element: <SignUp />,
    },
    {
        path: "*",
        element: <SignIn />,
    },
]);


export { router }
