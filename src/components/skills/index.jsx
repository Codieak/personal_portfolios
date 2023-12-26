import React from "react";

import Section from "../shared/section";

import TechIcons from "../../images/tech-icons.png";

import CallToAction from "../shared/CallToAction";

import { AiOutlineCloudDownload } from "react-icons/ai";

import "./style.scss";

const Skills = () => {
    return (
        <Section
            background="dark"
            id="skills"
        >
            <div className="skills-content-wrapper">
                <div className="left-col">
                    <img
                        src={TechIcons}
                        alt="JS,HTML,CSS,React"
                    />
                </div>
                <div className="right-col">
                    <h2>Skills</h2>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Ut, explicabo sit! Quae nisi, placeat, soluta ad
                        quibusdam illum dignissimos tenetur laudantium minima
                        nobis a sed blanditiis fugit incidunt natus voluptates
                        nam fuga facere delectus quisquam? Accusantium minima
                        cumque placeat amet modi, explicabo rerum, dignissimos
                        inventore recusandae fuga fugiat optio est!
                    </p>
                    <CallToAction
                        text="Download CV"
                        icon={<AiOutlineCloudDownload />}
                    />
                </div>
            </div>
        </Section>
    );
};

export default Skills;
