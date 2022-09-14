import React, { useContext, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import Logo from "../../Assets/Img/jobify.png";
import MessageIcon from "../../Assets/Svg/MessageIcon";
import BellIcon from "../../Assets/Svg/BellIcon";
import Dropdown from "../Dropdown/Dropdown";
import { BiUser } from "react-icons/bi";
import { RiSettings4Line, RiCloseFill, RiMenu3Fill } from "react-icons/ri";

const links = [
    { name: "Dashboard", link: "/dashboard" },
    { name: "Find Jobs", link: "/jobs" },
    { name: "Career Advice", link: "/advices" },
];

const dropdownlist = [
    { icon: <BiUser className="text-primary h-5 w-8" />, link: "/app/profile" },
    {
        icon: <RiSettings4Line className="text-primary h-5 w-8" />,
        link: "/app/settings",
    },
];

const Navbar = () => {
    const [open, setOpen] = useState(false);
    // const {logout} = useContext(AuthContext)
    // const {userData} = useContext(AuthContext)
    const nodeRef = useRef(null);

    // useClickOutside(nodeRef, () => {setOpen(false)})

    return (
        <header
            className="py-3 px-4 md:px-16 lg:px-32 flex justify-between items-end fixed top-0 left-0 h-fit w-full bg-white z-absolute"
            ref={nodeRef}
        >
            <img src={Logo} className="h-10 md:h-12" alt="" />
            <button
                className="block md:hidden z-absolute text-3xl"
                onClick={() => setOpen((prevOpen) => !prevOpen)}
            >
                {open ? <RiCloseFill /> : <RiMenu3Fill />}
            </button>
            <nav
                className={`fixed md:static top-0 ${
                    open ? "right-0" : "right-[-50%] opacity-0 md:opacity-100"
                } h-screen w-1/2 md:h-fit md:w-fit flex flex-col md:flex-row justify-evenly md:justify-center items-center md:gap-16 bg-secondary md:bg-transparent border-primary border-l-4 md:border-l-0 z-[2000] transition-all duration-500`}
            >
                <ul className="h-fit flex flex-col md:flex-row items-center gap-16 md:gap-4 lg:gap-8 text-lg">
                    {links.map((item, index) => (
                        <li
                            className="font-primarySemiBold"
                            key={`navLink${index}`}
                        >
                            <NavLink
                                to={`/app${item.link}`}
                                className={({ isActive }) =>
                                    isActive
                                        ? "font-primaryExtraBold text-primary border-b-[3px] border-primary block h-8"
                                        : "block h-8"
                                }
                            >
                                {item.name}
                            </NavLink>
                        </li>
                    ))}
                    <li className="block h-8">
                        <div className="bg-primary/10 py-1.5 px-2 rounded-md">
                            <Link to="/app/random">
                                <MessageIcon className="text-primary h-5 w-8" />
                            </Link>
                        </div>
                    </li>
                    <li className="block h-8">
                        <div className="bg-primary/10 py-1.5 px-2 rounded-md">
                            <Link to="/app/random">
                                <BellIcon className="text-primary h-5 w-8" />
                            </Link>
                        </div>
                    </li>
                    <li>
                        <div className="py-0.5 flex w-full" role="none">
                            {dropdownlist.map((item, index) => (
                                <button
                                    key={index}
                                    className="text-gray-900 hover:bg-secondary disabled:bg-gray-300 disabled:text-white block px-4 py-2 text-sm w-full capitalize"
                                >
                                    <Link
                                        to={item.link}
                                        className="w-full text-xl"
                                    >
                                        {item.icon}
                                    </Link>
                                </button>
                            ))}
                        </div>
                    </li>
                    <button className="text-gray-700 hover:bg-secondary disabled:bg-gray-300 disabled:text-white block px-4 py-2 text-sm capitalize">
                        Log out
                    </button>
                </ul>
            </nav>
        </header>
    );
};

export default Navbar;
