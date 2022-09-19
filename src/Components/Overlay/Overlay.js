import React, { useContext } from "react";
import { motion } from "framer-motion";
import { OverlayContext } from "../../Context/OverlayContext";
import "./overlay.css";

const overlayVariant = {
    open: {
        y: 0,
        opacity: 1,
        transition: {
            duration: 0.3,
            mass: 0.8,
            type: "spring",
        },
        display: "flex",
    },
    close: {
        y: -30,
        opacity: 0,
        transition: {
            duration: 0.3,
        },
        transitionEnd: {
            display: "none",
        },
    },
};

const Overlay = () => {
    const { OverlayContent, overlayState } = useContext(OverlayContext);

    return (
        <motion.div
            className="overlay__container"
            variants={overlayVariant}
            initial="close"
            animate={overlayState ? "open" : "close"}
        >
            {OverlayContent}
        </motion.div>
    );
};

export default Overlay;
