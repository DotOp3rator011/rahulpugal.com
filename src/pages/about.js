import React from "react";
import {Pane} from "evergreen-ui";


const AboutPage = () => {
    return (
        <React.Fragment>
            <Pane
                id={"about"}
                className={"background-container"}
            >
                <Pane
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    // height={"100vh"}
                >
                    <span className={"about-background-text"}>ABOUT</span>

                </Pane>
                <Pane
                    display={"flex"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    justifyContent={"center"}
                    height={"100vh"}
                    padding-right={"40%"}
                >
                    <span className={"about-text"}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer sed
                        eros eget tellus volutpat faucibus. Orci varius natoque penatibus et magnis dis parturient
                        montes, nascetur ridiculus mus. Curabitur venenatis blandit congue. Suspendisse semper sem sit
                        amet est scelerisque, a pharetra arcu malesuada. Sed ut sagittis urna, ut ultrices nulla.
                        Integer pellentesque odio eget mi venenatis, id ullamcorper risus aliquam. Nunc lacinia, purus
                        eget cursus efficitur, erat ante hendrerit ipsum, in tincidunt urna libero nec nulla.</span>
                </Pane>
            </Pane>
        </React.Fragment>
    )
};

export default AboutPage
