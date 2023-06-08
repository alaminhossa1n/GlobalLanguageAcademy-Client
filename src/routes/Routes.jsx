import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Auth/SignUp/SignUp";
import Login from "../pages/Auth/Login/Login";
import Dashboard from "../Layout/Dashboard";
import AllUser from "../pages/Dashboard/Allusers/AllUser";
import AllClasses from "../pages/Dashboard/AllClasses/AllClasses";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: 'signup',
                element: <SignUp></SignUp>
            },
            {
                path: 'login',
                element: <Login></Login>
            },
        ]
    },
    {
        path: 'dashboard',
        element: <Dashboard></Dashboard>,
        children: [
            // admin 
            {
                path: 'manage-users',
                element: <AllUser></AllUser>
            },
            {
                path: 'manage-class',
                element: <AllClasses></AllClasses>
            },
            // instructors 
            {
                path: 'add-class',
                element: <AddClass></AddClass>
            },
            {
                path: 'my-class',
                element: <MyClass></MyClass>
            },
            // student 
            {
                path: 'selected-class',
                element: <SelectedClass></SelectedClass>
            },
            {
                path: 'enrolled-class',
                element: <AllClasses></AllClasses>
            },
        ]
    }
]);

export default router;