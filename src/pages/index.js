import React from "react";
import PageBackground from "../components/page-background";
import Landing from "./landing";
import ServicesPage from "./services";

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <PageBackground imageSource={"landingPage"}>
                    <Landing/>
                </PageBackground>
                <ServicesPage/>
            </React.Fragment>
        )
    }
}

export default App
