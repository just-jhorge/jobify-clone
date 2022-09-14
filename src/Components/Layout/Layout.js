import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../Navbar/Navbar";

const Layout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <div>Alerts</div>
            <div>overlay</div>
        </>
    );
};

export default Layout;
