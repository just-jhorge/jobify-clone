import React, { useContext } from "react";
import { AlertContext } from "../../Context/AlertContext";
import Alert from "../Alert/Alert";
import "./alerts.css";

const Alerts = () => {
    const { alerts, removeAlert } = useContext(AlertContext);

    return (
        <div className="alerts-container">
            {alerts.map((alert) => {
                return (
                    <Alert
                        key={alert.id}
                        label={alert.label}
                        type={alert.type}
                        close={() => removeAlert(alert.id)}
                        duration={alert.duration}
                    />
                );
            })}
        </div>
    );
};

export default Alerts;
