import React from "react";

export default function Nav({ currentPage, handlePageChange }) {
  return (
    <ul className="nav nav-tabs">
      <li className="xnav-item">
        <a
          href="#Intro"
          onClick={() => handlePageChange("Intro")}
          className={currentPage === "Intro" ? "nav-link active" : "nav-link"}
        >
          Intro
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#About"
          onClick={() => handlePageChange("About")}
          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Projects"
          onClick={() => handlePageChange("Projects")}
          className={
            currentPage === "Projects" ? "nav-link active" : "nav-link"
          }
        >
          Project
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Contact"
          onClick={() => handlePageChange("Contact")}
          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}
