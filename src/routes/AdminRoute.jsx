import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [role, isRoleLoading] = useAdmin();
    const location = useLocation();

    if(loading || isRoleLoading){
        return <Navigate to="/" state={{from: location}} replace></Navigate>
    }

    if (user && role==='admin') {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;