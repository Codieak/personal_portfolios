import React from "react";
import "./style.scss";

import Section from "../shared/section";
import Logo from "../../images/logo.png";
import SocialIcon from "./social-icon";
import { scrollToSection } from "../utils/helper";

import {
    FaFacebook,
    FaGithub,
    FaLinkedin,
    FaStackOverflow,
    FaInstagram,
} from "react-icons/fa";

const Footer = () => {
    return (
        <Section
            background={"dark"}
            className={"footer"}
        >
            <div className="footer-content-wrapper">
                <div className="footer-logo">
                    <img
                        src={Logo}
                        alt="Logo"
                    />
                    <p>SKY</p>
                </div>
                <ul className="footer-menu-items">
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("skills")}
                    >
                        Skills
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("portfolio")}
                    >
                        Portfolio
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("blogs")}
                    >
                        Blogs & Articles
                    </li>
                    <li
                        className="footer-menu-item"
                        onClick={() => scrollToSection("contact")}
                    >
                        Contact Me
                    </li>
                </ul>
                <div className="social-icons">
                    <SocialIcon
                        color="#316FF6"
                        icon={<FaFacebook />}
                        link="https://www.facebook.com/attractive.ak"
                    />
                    <SocialIcon
                        color="#0D2636"
                        icon={<FaGithub />}
                        link="https://github.com/Codieak"
                    />
                    <SocialIcon
                        color="#f2740d"
                        icon={<FaStackOverflow />}
                        link="https://stackoverflow.com/users/13844563/akash-kumar-yadav"
                    />
                    <SocialIcon
                        color="#E84C88"
                        icon={<FaInstagram />}
                        link="https://www.instagram.com/_____the__sky_____"
                    />
                    <SocialIcon
                        color="#0A66C2"
                        icon={<FaLinkedin />}
                        link="https://www.linkedin.com/in/akashkryadav/"
                    />
                </div>
                <div className="bottom-bar">
                    <div className="copyright-text">
                        Copyright 2024 Akash Kumar Yadav | All Rights Reserved
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default Footer;
