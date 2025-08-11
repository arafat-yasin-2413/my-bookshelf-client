import React from "react";
import { BiSolidEdit } from "react-icons/bi";
import { FcPrivacy } from "react-icons/fc";
import { GiSupersonicArrow } from "react-icons/gi";
import { IoIosPeople, IoIosRocket } from "react-icons/io";
import { MdWorkspaces } from "react-icons/md";
import { RiFunctionAddFill } from "react-icons/ri";
import { SiGnuprivacyguard } from "react-icons/si";
import Container from "../../container/Container";

const About = () => {
    return (
        <Container>
            <div className="mt-10 mb-20">
                <div className="w-fit">
                    <h2 className="text-4xl font-medium">
                        About <span className="text-teal-800">Bookshelf</span>
                    </h2>
                    <div className="border border-b border-gray-200 my-4"></div>
                </div>

                <div>
                    <h2 className="text-xl font-semibold flex items-center gap-2 mb-2">
                        {" "}
                        <GiSupersonicArrow
                            size={30}
                            color="#E56353"
                        ></GiSupersonicArrow>{" "}
                        Our Mission
                    </h2>

                    <p>
                        At Bookshelf, our mission is to empower readers by
                        providing a simple yet powerful platform to track,
                        organize, and cherish their reading journey. We aim to
                        inspire consistent reading habits, support personal
                        growth, and foster a love for books. Whether you're a
                        casual reader or a passionate bibliophile, Bookshelf is
                        here to help you stay connected with the stories that
                        shape your world.
                    </p>
                </div>

                <div className="mt-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <MdWorkspaces size={30} color="#E56353"></MdWorkspaces>{" "}
                        What you can do here?
                    </h2>

                    <p className="list-disc mt-2">
                        <li>Add new books to your personal collection.</li>
                        <li>
                            Update reading status: Want to Read, Reading, or
                            Read.
                        </li>

                        <li>Edit or remove any book anytime.</li>
                        <li>
                            View your bookshelf with smart filters and clean UI.
                        </li>

                        <li>
                            Maintain a personal profile with your book list and
                            progress.
                        </li>
                    </p>
                </div>

                <div className="mt-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <IoIosPeople size={30} color="#E56353"></IoIosPeople>{" "}
                        Who is Bookshelf For?
                    </h2>

                    <p className="mt-2">
                        <li>
                            Students managing academic or personal reading
                            lists.
                        </li>
                        <li>
                            Professionals keeping track of self-help or career
                            books.
                        </li>
                        <li>
                            Book club members who need a record of group
                            readings.
                        </li>
                        <li>
                            Encourage readers wanting to build a personal
                            digital library.
                        </li>
                    </p>
                </div>

                <div className="mt-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        <IoIosRocket size={30} color="#E56353"></IoIosRocket>Key
                        Features
                    </h2>

                    <p className="mt-2">
                        <li>
                            <span className="font-medium">
                                Personal Library:{" "}
                            </span>{" "}
                            Students managing academic or personal reading
                            lists.
                        </li>

                        <li>
                            <span className="font-medium">
                                Reading Status:{" "}
                            </span>{" "}
                            Track progress as “Want to Read,” “Reading,” or
                            “Read.”
                        </li>
                        <li>
                            <span className="font-medium">
                                Responsive Design:{" "}
                            </span>{" "}
                            Enjoy a smooth experience on both desktop and
                            mobile.
                        </li>
                        <li>
                            <span className="font-medium">Secure Login: </span>{" "}
                            Your data is safe with us.
                        </li>
                    </p>
                </div>

                <div className="mt-4">
                    <h2 className="text-xl font-semibold flex items-center gap-2">
                        {" "}
                        <SiGnuprivacyguard
                            size={30}
                            color="#E56353"
                        ></SiGnuprivacyguard>{" "}
                        Privacy and Ownership
                    </h2>

                    <p className="mt-2">
                        Your privacy is our priority. At Bookshelf, your data
                        belongs to you. We never share or sell your information.
                        All reading activity and personal details are securely
                        stored and used only to enhance your experience on our
                        platform.
                    </p>
                </div>
            </div>
        </Container>
    );
};

export default About;
