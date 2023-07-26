import "./Footer.scss";
import React from "react";

const Footer = () => {
    return (
        <footer>
            <p>
                © Copyright {new Date().getFullYear()} AtumVegan - All rights
                reserved
            </p>
        </footer>
    );
};

export default Footer;
