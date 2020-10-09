import React from "react";
import {Pane} from "evergreen-ui";
import {pageScroll} from "../util";


const LandingPage = () => {
    return (
        <React.Fragment>
            <Pane
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
                justifyContent={"center"}
                paddingLeft={"5%"}
                paddingRight={"30%"}
                className={"landing-container"}
            >
                <Pane
                    className={"introduction-text"}
                    display={"flex"}
                    flexDirection={"column"}
                    marginBottom={10}
                >
                    <span>Hello, I'm <span className={"name-text"}>Rahul Pugal</span>.</span>
                    <span>I'm a Software Developer.</span>
                </Pane>
                <Pane
                    display={"flex"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    marginTop={10}
                    className={"know-more-button"}
                    height={"6vw"}
                    width={"18vw"}
                    onClick={() => pageScroll("")}
                >
                    <span>Know More</span>
                </Pane>
            </Pane>
        </React.Fragment>
    )
};

export default LandingPage
