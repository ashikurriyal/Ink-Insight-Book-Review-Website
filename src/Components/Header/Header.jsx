import { NavLink } from "react-router-dom";


const Header = () => {

    const links = <div className="flex lg:flex-row flex-col gap-4 font-worksans text-xl font-semibold">
        <li><NavLink to="/" style={({ isActive }) => {
            return isActive ? { backgroundColor: 'white', color: 'rgb(2 132 199)', fontWeight: '600', borderColor: 'rgb(2, 132, 199)', borderWidth: '2px', borderStyle: 'solid' } : {}
        }}>Home</NavLink></li>
        <li><NavLink to="/listed-books" style={({ isActive }) => {
            return isActive ? { backgroundColor: 'white', color: 'rgb(2 132 199)', fontWeight: '600', borderColor: 'rgb(2, 132, 199)', borderWidth: '2px', borderStyle: 'solid' } : {}
        }}>Listed Books</NavLink></li>
        <li><NavLink to="/pages-to-read" style={({ isActive }) => {
            return isActive ? { backgroundColor: 'white', color: 'rgb(2 132 199)', fontWeight: '600', borderColor: 'rgb(2, 132, 199)', borderWidth: '2px', borderStyle: 'solid' } : {}
        }}>Pages to Read</NavLink></li>
    </div>
    return (

        <div className="navbar bg-base-100 mt-2 lg:mb-8 mb-4">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {links} 
                    </ul>
                </div>
                <p className="lg:text-4xl text-xl font-worksans font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-600 to-blue-800 p-1">Ink Insight</p>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {links}
                </ul>
            </div>
            <div className="navbar-end lg:gap-4 gap-2">
                <a className="btn font-worksans lg:font-semibold lg:text-lg bg-green-500 text-white">Sign In</a>
                <a className="btn font-worksans lg:font-semibold lg:text-lg bg-sky-500 text-white">Sign Up</a>
            </div>
            
        </div>

    );
};

export default Header;