
import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";


const PrivateRoute = ({ children }) => {
    const { user, loading } = useAuth()
    const location = useLocation();

    if (loading) {
        return <div className="flex justify-center items-center">
            <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-blue-500"></div>
        </div>

    }

    if (user) {
        return children;
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default PrivateRoute;