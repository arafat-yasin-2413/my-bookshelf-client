import React from "react";

const FeatureCard = ({icon:Icon, text, value}) => {

    
    return (
        <div className="bg-white my-8 py-4 rounded-xl flex flex-col justify-center items-center">
            <h5 className="text-accent flex flex-col items-center mb-4">
                <Icon size={72}></Icon>
                <span className="text-3xl font-medium">{text}</span>
            </h5>

            <h2 className="text-7xl text-primary">{value}</h2>
        </div>
    );
};

export default FeatureCard;
