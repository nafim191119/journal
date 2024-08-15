import { Link } from "react-router-dom";
import Update from "./Update/Update";

const DashBoard = () => {

    return (
        <div>
            <div className="drawer">
                <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content flex flex-col">
                    {/* Navbar */}
                    <div className="navbar bg-blue-200 w-full">
                        <div className="flex-none lg:hidden">
                            <label htmlFor="my-drawer-3" aria-label="open sidebar" className="btn btn-square btn-ghost">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    className="inline-block h-6 w-6 stroke-current">
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"></path>
                                </svg>
                            </label>
                        </div>
                        <div className="mx-2 flex-1 px-2 text-3xl font-bold text-blue-500">Hello Admin!!!</div>
                        <div className="hidden flex-none lg:block pr-20">
                            <ul className="menu menu-horizontal text-black bg-white rounded-box">
                                {/* Navbar menu content here */}
                                <li><Link to={"/"}>Home</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="bg-gray-300 pb-20">
                        {/* Page content here */}
                        <Update></Update>
                    </div>
                </div>
                <div className="drawer-side">
                    <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
                    <ul className="menu bg-white min-h-full w-80 p-4">
                        {/* Sidebar content here */}
                        <li><Link to={"/"}>Home</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;