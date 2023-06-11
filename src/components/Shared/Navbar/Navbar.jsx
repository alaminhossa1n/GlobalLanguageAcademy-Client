import { Link } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { FaShoppingCart } from 'react-icons/fa';
import useCart from "../../../hooks/useCart";
import useAdmin from "../../../hooks/useAdmin";
import logo from '../../../assets/logo.png'

const Navbar = () => {
    const { user, logOut } = useAuth();
    const [cart] = useCart();
    const [role] = useAdmin();

    const handleLogOut = () => {
        logOut();
    }

    let dashboardPath = '';
    if (role === 'admin') {
        dashboardPath = '/dashboard/manage-class'
    }

    if (role === 'instructor') {
        dashboardPath = '/dashboard/add-class'
    }
    if (role === 'student') {
        dashboardPath = '/dashboard/selected-class'
    }


    const navItems = <>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/instructors">Instructors</Link></li>
        <li><Link to="/all-class">Classes</Link></li>

        {
            user && <li><Link to={dashboardPath}>Dashboard</Link></li>
        }

        {
            role === 'student' && <li>
                <Link to="/dashboard/selected-class">
                    <FaShoppingCart className="text-3xl"></FaShoppingCart>
                    {/* <div className="badge badge-secondary">+{cart?.length || 0}</div> */}
                    {cart.length > 0 && (
                        <div className="absolute top-0 right-0 bg-red-500 text-white rounded-full w-5 h-5 flex items-center justify-center text-xs">
                            {cart.length}
                        </div>
                    )}
                </Link>
            </li>
        }


        {
            user ? <>
                <button onClick={handleLogOut} className="btn btn-ghost">LogOut</button>
            </> : <>
                <li><Link to="/login">Login</Link></li>
            </>
        }

    </>

    return (
        <div className="navbar bg-[#4C3A51] h-20 text-white px-5 fixed z-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-[#37306B] rounded-box w-52">
                        {navItems}
                    </ul>
                </div>
                <Link to='/' className="">
                    <div className="text-white font-bold flex gap-3 items-center">
                        <img className='w-12' src={logo} alt="" />
                        <p className="text-lg">Global Language Academy</p>
                    </div>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navItems}
                </ul>
            </div>
            <div className="navbar-end">
                <div className={user?.displayName ? 'tooltip tooltip-bottom' : ''} data-tip={user?.displayName}>

                    {
                        user && <img className=" h-12 w-12 rounded-full" src={user.photoURL} alt="" />
                    }
                </div>

                <div className='ms-3'>
                    {
                        user ? <button onClick={handleLogOut} className='bg-red-600 hover:bg-red-700 text-white font-bold py-2 px-4 rounded'>Sign Out</button> : <Link to='/login'><button className='bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded'>Login</button></Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default Navbar;