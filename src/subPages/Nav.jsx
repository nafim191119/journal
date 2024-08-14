// Nav.jsx
import { Link, useNavigate } from 'react-router-dom';
import { auth } from '../firebase/firebase.config'; // Path to your firebase.js file
import { signOut } from 'firebase/auth';
import Clock from '../components/Clock';
import Calander from '../components/Calander';
import "../subPages/Nav.css";

const Nav = () => {
    const navigate = useNavigate();
    const user = auth.currentUser;

    const handleSignOut = async () => {
        try {
            await signOut(auth);
            navigate('/login'); // Redirect to login page after signing out
        } catch (error) {
            console.error('Sign out failed:', error);
        }
    };
    const isAdmin = user?.email === 'nafim191119@gmail.com';

    return (
        <div>
            <div className="bg-base-300 py-1 flex text-white font-bold gap-1 justify-end text-sm shadow-2xl">
                <Clock /> || <Calander /> || <Link className="text-white hover:underline" to="/">Exclusive journal is here...</Link>
            </div>
            <div className="navbar bg-white text-black font-semibold author-name tiro-bangla-regular">
                <div className="navbar-start">
                    <div className="dropdown text-2xl">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul tabIndex={0} className="menu menu-sm dropdown-content bg-white rounded-box z-[1] mt-3 w-52 p-2 shadow text-black font-bold">
                            <li><Link to={"/"}>হোম</Link></li>
                            <li>
                                <details>
                                    <summary>জার্নাল</summary>
                                    <ul className="p-2">
                                        <li><Link to={"journal/current"}>বর্তমান ঘটনা</Link></li>
                                    </ul>
                                </details>
                            </li>
                            <li><Link to={"/about"}>আমাদের সম্পর্কে</Link></li>
                            {isAdmin && <li><Link to={"/admin/dashboard"}>Dashboard</Link></li>}
                        </ul>
                    </div>
                    <div className="px-6">
                        <Link to={"/"}>
                            <div className="flex justify-center items-center">
                                <img className="w-20" src="https://i.ibb.co/nrTMJWB/Logo-1.png" alt="" />
                                <h1 className="md:text-5xl text-3xl font-bold text-black">তথ্যপ্রবাহ</h1>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="navbar-center hidden lg:flex text-2xl">
                    <ul className="menu menu-horizontal px-1">
                        <li><Link to={"/"} className="text-xl">হোম</Link></li>
                        <li>
                            <details>
                                <summary className="text-xl">জার্নাল</summary>
                                <ul className="p-2 text-black w-48 bg-white">
                                    <li><Link to={"journal/current"} className="text-xl">বর্তমান ঘটনা</Link></li>
                                </ul>
                            </details>
                        </li>
                        <li><Link to={"/about"} className="text-xl">আমাদের সম্পর্কে</Link></li>
                        {isAdmin && <li><Link to={"/admin/dashboard"} className="text-xl">Dashboard</Link></li>}
                    </ul>
                </div>
                <div className="navbar-end pr-6 gap-6">
                    {user ? (
                        <button onClick={handleSignOut} className="btn btn-outline btn-xs rounded-full">Sign Out</button>
                    ) : (
                        <>
                            <Link to={"/login"}>Login</Link>
                            <Link to={"/signin"}>SignUp</Link>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Nav;
