import { HiOutlineBookOpen } from "react-icons/hi";
import { DiHtml5, DiCss3, DiJavascript1 } from "react-icons/di";
import { skills } from "@/constants";
import Image from "next/image";
import { useEffect } from "react";

const Resume = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
        <article className="resume" data-page="resume">
            <header>
                <h2 className="h2 article-title">Resume</h2>
            </header>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <HiOutlineBookOpen />
                    </div>

                    <h3 className="h3">Education</h3>
                </div>

                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h5 className="h5 timeline-text">B-Tech (CSE)</h5>
                        <h4 className="h4 timeline-item-title">
                            Konark Institute of Science and Technology, Odisha
                        </h4>

                        <span>2019 — 2023</span>

                        <p className="timeline-text">Grade - 8.50 / 10 CGPA</p>
                    </li>

                    <li className="timeline-item">
                        <h5 className="h5 timeline-text">12th (Science)</h5>
                        <h4 className="h4 timeline-item-title">
                            Raja Ram Shah College, Raxaul
                        </h4>

                        <span>2017 — 2019</span>

                        <p className="timeline-text">Grade - 63 %</p>
                    </li>

                    <li className="timeline-item">
                        <h5 className="h5 timeline-text">10th</h5>
                        <h4 className="h4 timeline-item-title">
                            Utkramit Madhaymik School Beldarawa, Adapur
                        </h4>

                        <span>2017</span>

                        <p className="timeline-text">Grade - 65%</p>
                    </li>
                </ol>
            </section>

            <section className="timeline">
                <div className="title-wrapper">
                    <div className="icon-box">
                        <HiOutlineBookOpen />
                    </div>

                    <h3 className="h3">Experience</h3>
                </div>

                <ol className="timeline-list">
                    <li className="timeline-item">
                        <h5 className="h5 timeline-text">Internshala</h5>
                        <h4 className="h4 timeline-item-title">
                            Internshala Student Parter
                        </h4>

                        <span>10/2021 - 12/2021</span>

                        <p className="timeline-text">
                            ○ Hosted activities like workshops and seminars{" "}
                            <br />
                            ○ Established a good relationship with students and
                            faculty <br />○ Promoted Internshala brands,
                            products, and services on campus
                        </p>
                    </li>

                    <li className="timeline-item">
                        <h5 className="h5 timeline-text">Chegg India</h5>
                        <h4 className="h4 timeline-item-title">
                            Chegg Computer Science Expert
                        </h4>

                        <span>02/2022 - 08/2022</span>

                        <p className="timeline-text">
                            ○ Worked as a computer science expert on Chegg
                            <br />○ Assisted students with computer science
                            questions
                        </p>
                    </li>
                </ol>
            </section>

            <section className="skill">
                <h3 className="h3 skills-title">My skills</h3>

                <ul className="skills-list content-card">
                    {skills.map(({ id, title, logo }) => (
                        <li key={id} className="skills-item">
                            <div className="title-wrapper">
                                <h5 className="h5">{title}</h5>
                            </div>

                            <div className="skill-icon-list">
                                {logo.map((item) => (
                                    <div key={item.url}>
                                        <Image
                                            className="skill-icon"
                                            src={item.url}
                                            height={60}
                                            width={60}
                                            alt={item.title}
                                        />
                                        <span>{item.title}</span>
                                    </div>
                                ))}
                            </div>
                        </li>
                    ))}
                </ul>
            </section>
        </article>
    );
};

export default Resume;
