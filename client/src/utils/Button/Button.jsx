import React from "react";

const Button = ({ externalClass, children }) => {
    return <button className={`${externalClass} button`}>{children}</button>;
};

export default Button;
