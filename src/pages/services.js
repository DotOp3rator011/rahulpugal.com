import React from "react";
import ServiceItem from "../components/service-item";


export default class ServicesPage extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            services: [
                {
                    name: "RESTful API Systems",
                    image: "/images/services/api-development-and-integration.svg",
                    alt: "API Development & Integration",

                },
                {
                    name: "Web Apps & PWA",
                    image: "/images/services/web-app-and-pwa-development.svg",
                    alt: "Web Apps & PWA Development",

                },
                {
                    name: "System Architecture",
                    image: "/images/services/code-review-and-cleanup.svg",
                    alt: "Code Review & Cleanup",

                },
                {
                    name: "QA & Debugging",
                    image: "/images/services/bug-fixing.svg",
                    alt: "Bug Fixing",

                },
            ]
        }
    }


    render() {

        const {services} = this.state;

        return (
            <React.Fragment>
                <div id={"services-page"} className={"services-page-container"}>
                    <div className={"how-can-i-help-text-container fade-in-left"}>
                        <span>How can I <span className={"underlined-header"}>help?</span></span>
                    </div>
                    <div className={"service-items-container fade-in-right"}>
                        {services.map(service => <ServiceItem
                            name={service.name}
                            image={service.image}
                            alt={service.alt}
                        />)}
                    </div>
                </div>
            </React.Fragment>
        )
    }
};
