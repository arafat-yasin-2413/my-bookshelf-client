import React from "react";
import Lottie from "lottie-react";

const SDAnimation = () => {
    return (
        <div className="flex justify-center mt-4">
            <Lottie
                path="/assets/animations/Scroll-down.json"
                loop={true}
                autoplay={true}
                style={{ height: 80, width: 80 }}
            />
        </div>
    );
};

export default SDAnimation;
