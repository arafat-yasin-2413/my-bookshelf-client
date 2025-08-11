import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { motion } from "framer-motion";
import slide1 from "/assets/hail-mary.webp";
import slide2 from "/assets/summer-guest.webp";
import slide3 from "/assets/wild-dark.jpg";
import Container from "../../container/Container";

const Slider = () => {
    return (
        <Container>
            <div className="bg-white rounded-xl mt-10 py-16">
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                            duration: 2,
                            ease: [0.5, 1, 0.5, 2],
                        }}
                        className="text-2xl sm:text-3xl md:text-4xl mb-8 text-center font-semibold tracking-wider text-accent"
                    >
                        Our Popular Books
                    </motion.h2>
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
            </div>
        </Container>
    );
};

export default Slider;
