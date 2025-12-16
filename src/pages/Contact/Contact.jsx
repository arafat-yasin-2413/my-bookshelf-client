import { motion } from "framer-motion";
import React from "react";
import { FaCommentDollar, FaMapMarkerAlt, FaPhone, FaRocketchat } from "react-icons/fa";
import Container from "../../container/Container";
import { IoIosHeadset } from "react-icons/io";

const Contact = () => {
    return (
        <Container>
            <section class="rounded my-20">
                <div class="container py-12 mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                    >
                        <p class="font-medium text-3xl">Contact us</p>

                        <h1 class="mt-2 text-2xl font-semibold md:text-3xl">
                            We’d love to hear from you
                        </h1>

                        <p class="mt-3 text-gray-500 dark:text-gray-400">
                            Our friendly team is always here to chat.
                        </p>
                    </motion.div>

                    <div class="grid grid-cols-1 gap-12 mt-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                        <div class="p-4 rounded-lg bg-white">
                            <span class="inline-block p-3 text-accent text-xl rounded-lg bg-accent/20">
            
                                <FaCommentDollar />
                            </span>

                            <h2 class="mt-4 text-base font-medium text-gray-700">
                                Chat to sales
                            </h2>
                            <p class="mt-2 text-sm">
                                Speak to our friendly team.
                            </p>
                            <p class="mt-2 text-sm text-accent">
                                sales@bookshelf.com
                            </p>
                        </div>

                        <div class="p-4 rounded-lg bg-white">
                            <span class="inline-block p-3 text-accent text-xl rounded-lg bg-accent/20">
                                <IoIosHeadset />
                            </span>

                            <h2 class="mt-4 text-base font-medium text-black">
                                Chat to support
                            </h2>
                            <p class="mt-2 text-sm">We’re here to help.</p>
                            <p class="mt-2 text-sm text-accent">
                                Start new chat
                            </p>
                        </div>

                        <div class="p-4 rounded-lg bg-white">
                            <span class="inline-block p-3 text-accent text-xl rounded-lg bg-accent/20">
                                <FaMapMarkerAlt />
                            </span>

                            <h2 class="mt-4 text-base font-medium ">
                                Visit us
                            </h2>
                            <p class="mt-2 text-sm">Visit our office HQ..</p>
                            <p class="mt-2 text-sm text-accent">
                                FR Tower, Level-6,Tejgaon Industrial Area,
                                Dhaka-1205
                            </p>
                        </div>

                        <div class="p-4 rounded-lg bg-white">
                            <span class="inline-block p-3 text-accent text-xl rounded-lg bg-accent/20">
                                <FaPhone />
                            </span>

                            <h2 class="mt-4 text-base font-medium">Call us</h2>
                            <p class="mt-2 text-sm">Sat-Thu from 8am to 5pm.</p>
                            <p class="mt-2 text-sm text-accent">
                                +880 1833-555444
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </Container>
    );
};

export default Contact;
