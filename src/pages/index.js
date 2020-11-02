import React from "react";
import PageBackground from "../components/page-background";
import Landing from "./landing";

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <PageBackground imageSource={"landingPage"}>
                    <Landing/>
                </PageBackground>
            </React.Fragment>
        )
    }
}

export default App
