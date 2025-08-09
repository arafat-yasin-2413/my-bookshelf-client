import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

import slide1 from "/assets/hail-mary.webp";
import slide2 from "/assets/summer-guest.webp";
import slide3 from "/assets/wild-dark.jpg";

const Slider = () => {
    return (
        <>

            <div>
                <h2 className="text-4xl text-center font-medium text-primary">Our Popular Books</h2>
            </div>

            <div className="max-w-2xs mx-auto">
                <Carousel
                    autoPlay
                    infiniteLoop
                    interval={3000}
                    showThumbs={false}
                    showStatus={false}
                    showIndicators={true}
                    transitionTime={500}
                >
                    <div className="rounded border">
                        <img src={slide1} alt="Slide 1" />
                    </div>
                    <div className="rounded border">
                        <img src={slide2} alt="Slide 2" />
                    </div>
                    <div className="rounded border">
                        <img src={slide3} alt="Slide 3" />
                    </div>
                </Carousel>
            </div>
        </>
    );
};

export default Slider;
