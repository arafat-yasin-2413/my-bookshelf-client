import React from "react";

const FeatureCard = ({icon:Icon, text, value}) => {

    
    return (
        <div className="bg-white py-4 rounded-xl flex flex-col justify-center items-center">
            <h5 className="text-accent flex flex-col items-center mb-4">
                <Icon size={36}></Icon>
                <span className="text-xl font-medium">{text}</span>
            </h5>

            <h2 className="text-2xl font-semibold text-primary">{value}</h2>
        </div>
    );
};

export default FeatureCard;
