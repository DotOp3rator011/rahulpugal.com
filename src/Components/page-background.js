import React from "react";


export default class PageBackground extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            backgroundImages: {
                landingPage: '/images/landing-background.svg'
            },
        };
    }

    render() {
        const {backgroundImages} = this.state;

        const {
            imageSource,
            children
        } = this.props;

        return (
            <div
                className={"background-container"}
                style={{backgroundImage: `url(${backgroundImages[imageSource]})`}}
            >
                {children}
            </div>
        )
    }
}
