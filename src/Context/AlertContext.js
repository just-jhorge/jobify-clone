import React, { createContext, useCallback, useState } from "react";

let alertId = 0;

export const AlertContext = createContext({
    alerts: [],
    addAlert: () => {},
    removeAlert: () => {},
});

const AlertContextwrapper = ({ children }) => {
    const [alerts, setAlerts] = useState([]);

    const addAlert = useCallback((alert) => {
        const newId = alertId;
        alertId++;

        const newAlert = {
            duration: 4000,
            ...alert,
            id: newId,
        };

        setAlerts((alerts) => [...alerts, newAlert]);
    }, []);

    const removeAlert = useCallback((id) => {
        setAlerts((alerts) => alerts.filter((alert) => alert.id !== id));
    }, []);

    const AlertData = {
        alerts,
        addAlert,
        removeAlert,
    };

    return (
        <AlertContext.Provider value={AlertData}>
            {children}
        </AlertContext.Provider>
    );
};

export default AlertContextwrapper;
