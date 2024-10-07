import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../authProviders/AuthProvider";

function Header() {
    const { logOut, user } = useContext(AuthContext)
    const navLinks = <>
        <li><NavLink to="/">Home</NavLink></li>
        <li><NavLink to="/register">Register</NavLink></li>
        <li><NavLink to="/login">Login</NavLink></li>
        {
            user && <li><NavLink to="/userInfo">User Info</NavLink></li>
        }
    </>
    const handelLogOut = () => {
        logOut()
            .then(result => {
                console.log(result)
            })
            .catch(error => {
                console.log(error.message)
            })
    }
    return (
        <div className="navbar bg-primary text-primary-content">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                        {navLinks}
                    </ul>
                </div>
                <button className="font-bold btn btn-ghost text-2xl">React Auth</button>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>
            <div className="navbar-end">
                {
                    user ? <button onClick={handelLogOut} className="btn btn-sm">Sign out</button> :
                        <Link to="/login" className="btn btn-sm">Login</Link>
                }
            </div>
        </div>
    )
}

export default Header
