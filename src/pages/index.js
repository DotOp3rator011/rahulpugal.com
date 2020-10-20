import React from "react";
import LandingPage from "./landing";
import AboutPage from "./about";

class App extends React.Component {

    render() {
        return (
            <React.Fragment>
                <LandingPage/>
                <AboutPage/>
            </React.Fragment>
        )
    }
}

export default App
