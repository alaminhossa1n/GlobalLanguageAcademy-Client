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
import PrivateRoute from "./PrivateRoute";
import AdminRoute from "./AdminRoute";
import StudentRoute from "./StudentRoute";
import PaymentHistory from "../pages/Dashboard/PaymentHistory/PaymentHistory";

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
                element: <AdminRoute><AllUser></AllUser></AdminRoute>
            },
            {
                path: 'manage-class',
                element: <AdminRoute><PendingClass></PendingClass></AdminRoute>
            },
            // instructors 
            {
                path: 'add-class',
                element: <PrivateRoute><AddClass></AddClass></PrivateRoute>
            },
            {
                path: 'my-class',
                element: <PrivateRoute><MyClass></MyClass></PrivateRoute>
            },
            // student 
            {
                path: 'selected-class',
                element: <StudentRoute><SelectedClass></SelectedClass></StudentRoute>
            },
            {
                path: 'enrolled-class',
                element: <StudentRoute><EnrolledClass></EnrolledClass></StudentRoute>
            },
            {
                path: 'payment-history',
                element: <StudentRoute><PaymentHistory></PaymentHistory></StudentRoute>
            },
            {
                path: 'payment',
                element: <Payment></Payment>
            },
        ]
    }
]);

export default router;