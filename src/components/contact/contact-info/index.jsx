import React from "react";
import "./style.scss";

import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const ConntactInfo = () => {
    return (
        <div className="contact-info-box">
            <h4>
                I Would be happy to answer any questions you may have about
                Software Development Or Web Development!
            </h4>
            <div className="contact-option">
                <FaPhoneAlt />
                <span className="text">+91 1234567890</span>
            </div>
            <div className="contact-option">
                <MdEmail />
                <span className="text">example@example.com</span>
            </div>
        </div>
    );
};

export default ConntactInfo;
