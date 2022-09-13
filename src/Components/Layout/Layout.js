import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
    return (
        <>
            <div>navbar</div>
            <Outlet />
            <div>Alerts</div>
            <div>overlay</div>
        </>
    );
};

export default Layout;
