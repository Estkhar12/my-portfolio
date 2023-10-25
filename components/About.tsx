import { clients, testimonials } from "@/constants";
import { useState, useEffect } from "react";
import { MdClose } from "react-icons/md";

const About = () => {
    const [modal, setModal] = useState(testimonials[0]);
    const [active, setActive] = useState(false);
    const handleModal = (data: any) => {
        setActive(true);
        setModal(data);
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <article className="about active" data-page="about">
            <header>
                <h2 className="h2 article-title">About me</h2>
            </header>

            <section className="about-text">
                <p>
                    I'm Full Stack Web Developer from Delhi, India,
                    completed B-Tech in Computer Science from KIST College,
                    Bhubaneshwar Odisha.
                </p>

                <p>
                    I am skilled in JavaScript, Node.js, MongoDB and have good
                    knowledge of ReactJS, Redux and other frontend technologies.
                    From last one year I am building projects using Node.js,
                    MongoDB, JavaScript and other frontend framework
                </p>
                <button className="download-resume">Download Resume</button>
            </section>

            <section className="service">
                <h3 className="h3 service-title">What i'm doing</h3>

                <ul className="service-list">
                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="./assets/images/icon-dev.svg"
                                alt="Web development icon"
                                width="40"
                            />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">
                                Web development
                            </h4>

                            <p className="service-item-text">
                                High-quality development of sites at the
                                professional level.
                            </p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="./assets/images/icon-app.svg"
                                alt="mobile app icon"
                                width="40"
                            />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">
                                Mobile apps and Games
                            </h4>

                            <p className="service-item-text">
                                Professional development of applications for iOS
                                and Android.
                            </p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="./assets/images/icon-design.svg"
                                alt="design icon"
                                width="40"
                            />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">Blogging</h4>

                            <p className="service-item-text">
                                The most modern and high-quality design made at
                                a professional level.
                            </p>
                        </div>
                    </li>

                    <li className="service-item">
                        <div className="service-icon-box">
                            <img
                                src="./assets/images/icon-photo.svg"
                                alt="camera icon"
                                width="40"
                            />
                        </div>

                        <div className="service-content-box">
                            <h4 className="h4 service-item-title">
                                Freelancing
                            </h4>

                            <p className="service-item-text">
                                I make high-quality photos of any category at a
                                professional level.
                            </p>
                        </div>
                    </li>
                </ul>
            </section>

            {/* testimonials */}

            <section className="testimonials">
                <h3 className="h3 testimonials-title">Testimonials</h3>

                <ul className="testimonials-list has-scrollbar">
                    {testimonials.map((item) => (
                        <li
                            onClick={() => handleModal(item)}
                            key={item.id}
                            className="testimonials-item"
                        >
                            <div
                                className="content-card"
                                data-testimonials-item
                            >
                                <figure className="testimonials-avatar-box">
                                    <img
                                        src={item.image}
                                        alt={item.name}
                                        width="60"
                                        data-testimonials-avatar
                                    />
                                </figure>

                                <h4
                                    className="h4 testimonials-item-title"
                                    data-testimonials-title
                                >
                                    {item.name}
                                </h4>

                                <div
                                    className="testimonials-text"
                                    data-testimonials-text
                                >
                                    <p>{item.comment}</p>
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            {/* - testimonials modal */}

            <div
                className={`modal-container ${active ? "active" : ""}`}
                data-modal-container
            >
                <div
                    className={`overlay ${active ? "active" : ""}`}
                    data-overlay
                ></div>

                <section className="testimonials-modal">
                    <button
                        onClick={() => setActive(false)}
                        className="modal-close-btn"
                        data-modal-close-btn
                    >
                        <MdClose />
                    </button>

                    <div className="modal-img-wrapper">
                        <figure className="modal-avatar-box">
                            <img
                                src={modal.image}
                                alt="Daniel lewis"
                                width="80"
                                data-modal-img
                            />
                        </figure>

                        <img
                            src="./assets/images/icon-quote.svg"
                            alt="quote icon"
                        />
                    </div>

                    <div className="modal-content">
                        <h4 className="h3 modal-title" data-modal-title>
                            {modal.name}
                        </h4>
                        <p className="time">{modal.date}</p>

                        <div data-modal-text>
                            <p>{modal.comment}</p>
                        </div>
                    </div>
                </section>
            </div>

            {/* Clients  */}

            <section className="clients">
                <h3 className="h3 clients-title">Clients</h3>

                <ul className="clients-list has-scrollbar">
                    {clients.map((item) => (
                        <li key={item.id} className="clients-item">
                            <a href={item.link}>
                                <img src={item.image} alt={item.title} />
                            </a>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default About;
