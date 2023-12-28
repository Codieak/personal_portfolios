import React from "react";
import { BsAwardFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import "./style.scss";

import hand from "../../../images/hand.png";
import CallToAction from "../../shared/CallToAction";
import photo from "../../../images/girl.png";
import { scrollToSection } from "../../utils/helper";

const IntroContent = () => {
    return (
        <div className="intro-content">
            <div className="layout">
                <div className="left-col">
                    <h1 className="title">
                        <span className="small-text">
                            <span className="text">Hello</span>
                            <span className="icon">
                                <img
                                    src={hand}
                                    alt="Waving Hand"
                                />
                            </span>
                            <span className="text">, I am</span>
                        </span>
                        <span className="big-text">Akash Kumar Yadav</span>
                    </h1>
                    <p>
                        I’m familiar with a variety of programming languages,
                        including C++,C#, HTML, CSS, Python, JAVA and GO, but
                        I’m always adding new skills to my repertoire. I’m also
                        eager to meet other software engineers in the area, so
                        feel free to connect!
                    </p>
                    <CallToAction
                        text={"Contact Me"}
                        action={() => scrollToSection("contact")}
                    />
                </div>
                <div className="right-col">
                    <img
                        src={photo}
                        alt="My Photo"
                    />
                    <div className="highlights horizontal">
                        <div className="icon">
                            <BsAwardFill />
                        </div>
                        <div className="text">Web Developer</div>
                    </div>
                    <div className="highlights vertical">
                        <div className="icon">
                            <FaUser />
                        </div>
                        <div className="text">
                            <span>Data Structure & Algorithm</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default IntroContent;
