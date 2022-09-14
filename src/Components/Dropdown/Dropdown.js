import React, { useRef, useState } from "react";
import { motion } from "framer-motion";
import { slideVerticalAnimation } from "../../Utils/animation";

const Dropdown = ({ button, children }) => {
    const [isOpen, setIsOpen] = useState(false);
    const nodeRef = useRef(null);

    // useClickOutside(nodeRef, () => setIsOpen(false));
    return (
        <div className="relative inline-block text-left" ref={nodeRef}>
            <div>
                <div
                    type="button"
                    className="h-fit cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {button}
                </div>
            </div>
            <motion.div
                initial="close"
                animate={isOpen ? "open" : "close"}
                variants={slideVerticalAnimation}
            >
                {children}
            </motion.div>
        </div>
    );
};

export default Dropdown;
