import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { BookOpenText } from "lucide-react";

const Navbar = () => {
    const navigate = useNavigate()
    const [token, setToken] = useState(null)

    useEffect(() => {
        const token = localStorage.getItem('token')
        setToken(token)
    }, [])

    return (
        <div className="drawer">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
            <div className="navbar bg-base-300 w-full">
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
            <div className="mx-2 flex-1 px-2">
                <Link to="/homeview" className="flex items-center gap-2"> <BookOpenText className="w-6 h-6" /> Book Buddy</Link>
            </div>
            <div className="hidden flex-none lg:block">
                <ul className="menu menu-horizontal">
                    {token ? (
                        <li><a onClick={() => navigate('/accountview')}>Account</a></li>
                    ) : (
                        <>
                        <li><a onClick={() => navigate('/')}>Log In</a></li>
                        <li><a onClick={() => navigate('/signup')}>Sign Up</a></li>
                        </>
                    )}
                </ul>
            </div>
            </div>
        </div>

        <div className="drawer-side">
            <label htmlFor="my-drawer-3" aria-label="close sidebar" className="drawer-overlay"></label>
            <ul className="menu bg-base-200 min-h-full w-80 p-4">
                {token ? (
                        <li><a onClick={() => navigate('/accountview')}>Account</a></li>
                    ) : (
                        <>
                        <li><a onClick={() => navigate('/')}>Log In</a></li>
                        <li><a onClick={() => navigate('/signup')}>Sign Up</a></li>
                        </>
                    )}
            </ul>
        </div>
        </div>
    );
}
 
export default Navbar;