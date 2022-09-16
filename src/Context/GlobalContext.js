import React from "react";
import AlertContextwrapper from "./AlertContext";
import AuthContextWrapper from "./AuthContext";
import OverlayContextWrapper from "./OverlayContext";

const GlobalContext = ({ children }) => {
    return (
        <AlertContextwrapper>
            <OverlayContextWrapper>
                <AuthContextWrapper>{children}</AuthContextWrapper>
            </OverlayContextWrapper>
        </AlertContextwrapper>
    );
};

export default GlobalContext;
