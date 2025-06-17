import React from "react";

const Blog = () => {
    return (
        <>
            <article className="overflow-hidden rounded-lg shadow-sm transition hover:shadow-lg p-8 bg-teal-50 max-w-3xl ">
                <img
                    alt=""
                    src={"https://i.ibb.co/pjWFFqHB/book-reading.jpg"}
                    className="w-full h-96 object-cover rounded"
                />

                <div className="bg-white p-4 sm:p-6">
                    <time
                        datetime="2025-06-16"
                        className="block text-xs text-gray-500"
                    >
                        {" "}
                        16th June 2025{" "}
                    </time>

                    <a href="#">
                        <h3 className="mt-0.5 text-lg text-gray-900">
                            Daily Reading Habits of Highly Successful People
                        </h3>
                    </a>

                    <div className="mt-2 text-sm/relaxed text-gray-500">
                        <p>
                            Reading is one of the most powerful habits that
                            highly successful people incorporate into their
                            daily routines. From entrepreneurs and CEOs to
                            writers and athletes, many attribute a significant
                            part of their success to their reading habits. In
                            this blog, we’ll explore how successful people
                            approach reading daily, what they read, and how you
                            can adopt similar habits to elevate your own life.
                        </p>

                        <br />
                        <h3>Why Successful People Read Daily</h3>

                        <p>
                            1. Continuous Learning Successful individuals never
                            stop learning. Reading allows them to acquire new
                            knowledge, stay informed about their industry, and
                            develop critical thinking skills. "Reading is still
                            the main way that I both learn new things and test
                            my understanding." — Bill Gates
                        </p>

                        <br />

                        <p>
                            2. Mental Exercise Just as physical exercise
                            strengthens the body, reading sharpens the mind. It
                            improves focus, memory, vocabulary, and creativity.
                            3. Stress Reduction Reading helps to reduce stress
                            and improve mental well-being. Many successful
                            people use reading as a way to unwind, relax, and
                            gain perspective.
                        </p>

                        <h3>How They Make Reading a Daily Habit</h3>

                        <p>
                            1. Set a Reading Goal <br />
                            <span>
                                Many successful people set daily or yearly
                                reading goals.
                            </span>
                            <br />
                            <li>
                                Warren Buffett reportedly reads 5–6 hours a day.
                            </li>
                            <li>
                                Mark Zuckerberg challenged himself to read a new
                                book every two weeks.
                            </li>
                            <li>
                                Elon Musk credits much of his knowledge to books
                                and read science fiction for hours as a child.
                            </li>
                        </p>

                        <br />

                        <p>
                            2. Schedule Dedicated Time <br />
                            <span>
                                They block out specific times in their day for
                                reading, such as:
                            </span>
                            <br />
                            <li>
                                Morning reading to start the day with insight
                                and inspiration.
                            </li>
                            <li>Midday reading during lunch breaks.</li>
                            <li>Nighttime reading to unwind before bed.</li>
                        </p>

                        <br />

                        <p>
                            3. Read with Purpose <br />
                            <span>
                                They don’t just read for entertainment (although
                                that’s valuable too). They choose books that:
                            </span>
                            <br />
                            <li>Improve their skills or knowledge.</li>
                            <li>Offer new perspectives or ideas.</li>
                            <li>
                                Help them solve problems in life or business.
                            </li>
                        </p>

                        <br />

                        <p>
                            The daily reading habits of successful people aren't
                            just about consuming more information — they're
                            about learning deliberately, thinking critically,
                            and growing consistently. By adopting even a small
                            part of their reading routine, you can make profound
                            changes in your knowledge, confidence, and mindset.
                            "A reader lives a thousand lives before he dies. The
                            man who never reads lives only one." — George R.R.
                            Martin
                        </p>
                    </div>
                </div>
            </article>
        </>
    );
};

export default Blog;
