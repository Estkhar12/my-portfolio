"use client";
import About from "@/components/About";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Portfolio from "@/components/Portfolio";
import Resume from "@/components/Resume";
import Sidebar from "@/components/shared/Sidebar";
import { navLinks } from "@/constants";
import { useState } from "react";

export default function Home() {
    const [activeTab, setActiveTab] = useState("About");

    return (
        <main>
            <Sidebar />

            {/* Main content */}
            <div className="main-content">
                {/* NAVBAR */}

                <nav className="navbar">
                    <ul className="navbar-list">
                        {navLinks.map(({ id, title }) => (
                            <li key={id} className="navbar-item">
                                <button
                                    onClick={() => setActiveTab(title)}
                                    className={`navbar-link ${
                                        activeTab === title ? "active" : ""
                                    }`}
                                    data-nav-link
                                >
                                    {title}
                                </button>
                            </li>
                        ))}
                    </ul>
                </nav>

                {activeTab === "About" && <About />}
                {activeTab === "Resume" && <Resume />}
                {activeTab === "Portfolio" && <Portfolio />}
                {activeTab === "Blog" && <Blog />}
                {activeTab === "Contact" && <Contact />}
            </div>
        </main>
    );
}
