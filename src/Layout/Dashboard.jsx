import { NavLink, Outlet } from "react-router-dom";
import { FaHome } from 'react-icons/fa';
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {

    const [role] = useAdmin();
    return (

        <div className="drawer lg:drawer-open bg-[#FFC18E]">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="drawer-content flex flex-col items-center justify-center">
                {/* Page content here */}
                <Outlet></Outlet>
                <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

            </div>
            <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
                <ul className="menu p-4 w-80 h-full bg-[#7A4069] text-base-content">

                    {/* Student Dashboard */}
                    {role === 'student' && (
                        <>
                            <li><NavLink to="/dashboard/selected-class"><FaHome></FaHome> My Selected Classes</NavLink></li>
                            <li><NavLink to="/dashboard/enrolled-class"><FaHome></FaHome> My Enrolled Classes</NavLink></li>
                        </>
                    )}

                    {/* Instructors Dashboard */}

                    {role === 'instructor' && (
                        <>
                            <li><NavLink to="/dashboard/add-class"><FaHome></FaHome> Add a Class</NavLink></li>
                            <li><NavLink to="/dashboard/my-class"><FaHome></FaHome> My Classes</NavLink></li>
                        </>
                    )}

                    {/* Admin Dashboard */}

                    {role === 'admin' && (
                        <>
                            <li><NavLink to="/dashboard/manage-class"><FaHome></FaHome> Manage Classes</NavLink></li>
                            <li><NavLink to="/dashboard/manage-users"><FaHome></FaHome> Manage Users</NavLink></li>
                        </>
                    )}


                    <div className="divider"></div>
                    <li><NavLink to="/"><FaHome></FaHome> Home</NavLink> </li>
                </ul>

            </div>
        </div>
    );
};

export default Dashboard;