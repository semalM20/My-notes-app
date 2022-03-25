import React, { useContext } from "react";
import AlertContext from "../../context/AlertContext/AlertContext";

const Alert = () => {
  const alert = useContext(AlertContext);

  return (
    <div
      className={`alert alert-${alert.alertType}`}
      role="alert"
      style={{ display: `${alert.alertType === null ? "none" : "block"}` }}
    >
      {alert.alertMsg}
    </div>
  );
};

export default Alert;
