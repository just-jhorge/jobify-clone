import React, { useEffect, useState } from "react";

const Loadable = ({ children, fallback, isLoading }) => {
    let [view, setView] = useState(fallback);

    useEffect(() => {
        setView(!isLoading ? children : fallback);
    }, [isLoading]);

    return <>{view}</>;
};

export default Loadable;
