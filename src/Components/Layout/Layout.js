import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import Alerts from "../Alerts/Alerts";
import Overlay from "../Overlay/Overlay";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
    const { isLoggedIn } = useContext(AuthContext);
    return (
        <>
            {isLoggedIn && <Navbar />}
            <Outlet />
            <Alerts />
            <Overlay />
        </>
    );
};

export default Layout;
