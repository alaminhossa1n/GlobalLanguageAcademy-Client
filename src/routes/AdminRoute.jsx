import { Navigate, useLocation } from "react-router";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";


const AdminRoute = ({ children }) => {
    const { user, loading } = useAuth();
    const [role, isRoleLoading] = useAdmin();
    const location = useLocation();

    if(loading || isRoleLoading){
        return <div className="flex justify-center items-center">
        <div className="animate-spin rounded-full h-14 w-14 border-t-4 border-b-4 border-blue-500"></div>
      </div>
      
    }

    if (user && role==='admin') {
        return children;
    }
    return <Navigate to="/" state={{from: location}} replace></Navigate>
};

export default AdminRoute;