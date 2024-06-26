// MainNavbar.js
import React, { useState } from "react";
import "./MainNavbar.css";

function MainNavbar() {
    const [activeButton, setActiveButton] = useState(null);

    const handleButtonClick = (buttonName) => {
        setActiveButton(activeButton === buttonName ? null : buttonName);
    };

    return (
        <div className="MainNavbar">
            <div className="MainNavbar-Header">
                <button
                    className={`MainNavbar-Icon ${activeButton === "person" ? "active" : ""}`}
                    onClick={() => handleButtonClick("person")}
                    style={{ backgroundColor: activeButton === "person" ? "#1c591f" : "transparent" }}
                >
                    <svg
                        alt="person"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-user"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="0.6"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M8 7a4 4 0 1 0 8 0a4 4 0 0 0 -8 0" />
                        <path d="M6 21v-2a4 4 0 0 1 4 -4h4a4 4 0 0 1 4 4v2" />
                    </svg>
                </button>
                <button
                    className={`MainNavbar-Icon ${activeButton === "star" ? "active" : ""}`}
                    onClick={() => handleButtonClick("star")}
                    style={{ backgroundColor: activeButton === "star" ? "#1c591f" : "transparent" }}
                >
                    <svg
                        alt="star"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-star"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="0.6"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 17.75l-6.172 3.245l1.179 -6.873l-5 -4.867l6.9 -1l3.086 -6.253l3.086 6.253l6.9 1l-5 4.867l1.179 6.873z" />
                    </svg>
                </button>
                <button
                    className={`MainNavbar-Icon ${activeButton === "history" ? "active" : ""}`}
                    onClick={() => handleButtonClick("history")}
                    style={{ backgroundColor: activeButton === "history" ? "#1c591f" : "transparent" }}
                >
                    <svg
                        alt="history"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-history"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="0.6"
                        stroke="#2c3e50"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M12 8l0 4l2 2" />
                        <path d="M3.05 11a9 9 0 1 1 .5 4m-.5 5v-5h5" />
                    </svg>
                </button>
                <button
                    className={`MainNavbar-Icon ${activeButton === "calendar" ? "active" : ""}`}
                    onClick={() => handleButtonClick("calendar")}
                    style={{ backgroundColor: activeButton === "calendar" ? "#1c591f" : "transparent" }}
                >
                    <svg
                        alt="calendar"
                        xmlns="http://www.w3.org/2000/svg"
                        className="icon icon-tabler icon-tabler-calendar-month"
                        width="44"
                        height="44"
                        viewBox="0 0 24 24"
                        strokeWidth="0.6"
                        stroke="#c0b8b8"
                        fill="none"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                    >
                        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
                        <path d="M4 7a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2v-12z" />
                        <path d="M16 3v4" />
                        <path d="M8 3v4" />
                        <path d="M4 11h16" />
                        <path d="M7 14h.013" />
                        <path d="M10.01 14h.005" />
                        <path d="M13.01 14h.005" />
                        <path d="M16.015 14h.005" />
                        <path d="M13.015 17h.005" />
                        <path d="M7.01 17h.005" />
                        <path d="M10.01 17h.005" />
                    </svg>
                </button>
            </div>
        </div>
    );
}

export default MainNavbar;
