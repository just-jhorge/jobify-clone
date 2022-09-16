import React, { createContext, useCallback, useState } from "react";

export const OverlayContext = createContext({
    overlayState: false,
    openOverlay: () => {},
    closeOverlay: () => {},
});

const OverlayContextWrapper = ({ children }) => {
    const [overlayState, setOverlayState] = useState(false);
    const [overlayContent, setOverlayContent] = useState(
        <div>nothing here</div>
    );

    const openOverlay = useCallback((content) => {
        setOverlayState(true);
        setOverlayContent(content);
    }, []);

    const closeOverlay = useCallback(() => {
        setOverlayState(false);
        setOverlayContent("");
    }, []);

    const overlayData = {
        overlayState,
        overlayContent,
        openOverlay,
        closeOverlay,
        setOverlayContent,
    };

    return (
        <OverlayContext.Provider value={overlayData}>
            {children}
        </OverlayContext.Provider>
    );
};

export default OverlayContextWrapper;
