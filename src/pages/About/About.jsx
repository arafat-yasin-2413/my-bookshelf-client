import React from "react";
import { GiSupersonicArrow } from "react-icons/gi";
import { IoIosPeople, IoIosRocket } from "react-icons/io";
import { MdWorkspaces } from "react-icons/md";
import { SiGnuprivacyguard } from "react-icons/si";
import Container from "../../container/Container";

const About = () => {
    return (
        <Container>
            <div className="mt-16 mb-28 space-y-20">

                {/* Header */}
                <div className="text-center max-w-3xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-semibold text-gray-800">
                        About <span className="text-primary">Bookshelf</span>
                    </h1>
                    <p className="mt-5 text-gray-600 text-lg leading-relaxed">
                        Bookshelf is a modern reading companion designed to help you
                        organize, track, and truly enjoy your reading journey — all in one simple place.
                    </p>
                </div>

                {/* Shared Width Wrapper */}
                <div className="max-w-7xl mx-auto space-y-20">

                    {/* Mission */}
                    <div className="relative bg-primary/5 rounded-3xl p-10 md:p-14">
                        <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                            <div className="flex-shrink-0">
                                <div className="w-16 h-16 rounded-2xl bg-white shadow-md flex items-center justify-center">
                                    <GiSupersonicArrow size={34} className="text-[#E56353]" />
                                </div>
                            </div>

                            <div>
                                <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
                                    Our Mission
                                </h2>
                                <p className="mt-4 text-gray-600 leading-relaxed text-lg">
                                    At Bookshelf, our mission is to bring clarity and calm to your
                                    reading life. We believe reading should feel inspiring not overwhelming.
                                </p>
                                <p className="mt-3 text-gray-600 leading-relaxed">
                                    By helping you organize books, track progress, and reflect on
                                    what you read, Bookshelf supports meaningful habits that grow with you over time.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Cards */}
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
                            <MdWorkspaces size={36} className="text-[#E56353]" />
                            <h3 className="text-xl font-semibold mt-4 text-gray-800">
                                Manage Your Library
                            </h3>
                            <p className="mt-3 text-gray-600">
                                Add, edit, or remove books anytime and keep your personal
                                collection exactly the way you want it.
                            </p>
                        </div>

                        <div className="rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
                            <IoIosRocket size={36} className="text-[#E56353]" />
                            <h3 className="text-xl font-semibold mt-4 text-gray-800">
                                Track Your Progress
                            </h3>
                            <p className="mt-3 text-gray-600">
                                Clearly track what you want to read, what you're currently
                                reading, and what you’ve already finished.
                            </p>
                        </div>

                        <div className="rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition">
                            <IoIosPeople size={36} className="text-[#E56353]" />
                            <h3 className="text-xl font-semibold mt-4 text-gray-800">
                                Built for Every Reader
                            </h3>
                            <p className="mt-3 text-gray-600">
                                Perfect for students, professionals, book club members,
                                and anyone who loves staying organized while reading.
                            </p>
                        </div>
                    </div>

                    {/* Privacy */}
                    <div className="bg-gray-50 rounded-3xl p-10 text-center">
                        <SiGnuprivacyguard size={48} className="text-[#E56353] mx-auto" />
                        <h2 className="text-2xl font-semibold mt-4 text-gray-800">
                            Privacy & Ownership
                        </h2>
                        <p className="mt-4 text-gray-600 leading-relaxed">
                            Your data belongs only to you. Bookshelf never shares or sells
                            your information. All activity and personal details are securely
                            stored and used solely to improve your experience.
                        </p>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default About;
