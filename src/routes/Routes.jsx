import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import SignUp from "../pages/Auth/SignUp/SignUp";
import Login from "../pages/Auth/Login/Login";
import Dashboard from "../Layout/Dashboard";
import AllUser from "../pages/Dashboard/Allusers/AllUser";
import AddClass from "../pages/Dashboard/AddClass/AddClass";
import MyClass from "../pages/Dashboard/MyClass/MyClass";
import SelectedClass from "../pages/Dashboard/SelectedClass/SelectedClass";
import EnrolledClass from "../pages/Dashboard/EnrolledClass/EnrolledClass";
import AllClasses from "../pages/AllClasses/AllClasses";
import Instructors from "../pages/Instructors/Instructors";
import Payment from "../pages/Dashboard/Payment/Payment";
import PendingClass from "../pages/Dashboard/AllClasses/PendingClass";

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
            {
                path: 'all-class',
                element: <AllClasses></AllClasses>
            },
            {
                path: 'instructors',
                element: <Instructors></Instructors>
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
                element: <PendingClass></PendingClass>
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
                element: <EnrolledClass></EnrolledClass>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
        ]
    }
]);

export default router;