import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../Components/Button/Button";
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Header = () => {
    const [open, setOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="py-3 px-4 md:px-16 lg:px-32 flex items-center justify-between fixed top-0 left-0 w-full z-[99999999999] bg-white shadow-md">
            <img
                src={require("../../Assets/Img/jobify.png")}
                className="h-12"
                alt=""
            />

            <button
                className="block md:hidden z-absolute font-black text-3xl"
                onClick={() => setOpen((prevOpen) => !prevOpen)}
            >
                {open ? <RiCloseFill /> : <RiMenu3Fill />}
            </button>

            <nav
                className={`absolute md:static top-0 ${
                    open ? "right-0 bg-secondary" : "right-[-60%]"
                } h-screen w-[60%] md:h-fit md:w-fit flex flex-col md:flex-row justify-evenly md:justify-center items-center overflow-y-hidden md:gap-8 border-primary border-l-4 md:border-l-0 z-[2000] transition-all duration-500`}
            >
                <ul className="flex flex-col md:flex-row gap-16 md:gap-4 lg:gap-8 text-lg">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/">About</Link>
                    </li>
                    <li>
                        <Link to="/">Find Jobs</Link>
                    </li>
                    <li>
                        <Link to="/">Career Advice</Link>
                    </li>
                </ul>
                <div className="flex items-center justify-center gap-2 md:gap-4">
                    <Button
                        text="Log In"
                        color="secondary"
                        onClick={() => navigate("/app/login")}
                        isformbutton={false}
                    />
                    <Button
                        text="Register"
                        color="primary"
                        onClick={() => navigate("/app/register")}
                        isformbutton={false}
                    />
                </div>
            </nav>
        </header>
    );
};

export default Header;
