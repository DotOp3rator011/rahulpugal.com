import React from "react";
import {pageScroll} from "../util";


const LandingPage = () => {

    return (
        <div className={"introduction-container fade-in-up"}>
            <div className={"introduction-text"}>
                <span>Hello, I'm <span className={"name-text"}>Rahul Pugal</span>.</span>
                <span>I'm a Software Developer.</span>
            </div>
            <div
                className={"know-more-button"}
                onClick={() => pageScroll("")}
            >
                <span>Know More</span>
            </div>
        </div>
    )
};

export default LandingPage
