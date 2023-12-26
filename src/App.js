import React from "react";

import Intro from "./components/intro";
import Skills from "./components/skills";
import Portfolio from "./components/Portfolio";
import Blog from "./components/blogs";
import Contact from "./components/contact";
import "./app.scss";

const App = () => {
    return (
        <div>
            <Intro />
            <Skills />
            <Portfolio />
            <Blog />
            <Contact />
        </div>
    );
};

export default App;
