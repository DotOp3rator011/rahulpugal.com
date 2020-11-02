import React from "react";


const ServiceItem = (props) => {

    const {
        image,
        alt,
        name
    } = props;

    return (
        <React.Fragment>
            <div className={"service-item"}>
                <img src={image} alt={alt}/>
                <span>{name}</span>
            </div>
        </React.Fragment>
    )
};

export default ServiceItem
