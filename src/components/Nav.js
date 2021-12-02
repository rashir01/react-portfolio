import React from "react";

export default function Nav({ currentPage, handlePageChange }) {
  const linkStyle = { border: "1px black", padding: "5px" };

  return (
    <ul className="nav nav-tabs">
      <li className="xnav-item">
        <a
          href="#Intro"
          onClick={() => handlePageChange("Intro")}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === "Intro" ? "nav-link active" : "nav-link"}
        >
          Intro
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#About"
          onClick={() => handlePageChange("About")}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === "About" ? "nav-link active" : "nav-link"}
        >
          About
        </a>
      </li>
      <li className="nav-item">
        <a
          href="#Projects"
          onClick={() => handlePageChange("Projects")}
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

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
          //*  TODO: BONUS: Add a comment explaining what kind of operator this is and what it is checking for

          className={currentPage === "Contact" ? "nav-link active" : "nav-link"}
        >
          Contact
        </a>
      </li>
    </ul>
  );
}

/*
<nav className="main-header-menu">
      <section
        style={{
          display: "flex",
          fontFamily: "helvetica",
          flexDirection: "row",
          alignItems: "flex-start",
          justifyContent: "flex-start",
        }}
      >
        <div style={linkStyle}>
          <a href="#home">Home</a>
        </div>
        <div style={linkStyle}>
          <a href="#projects">Projects</a>
        </div>
        <div style={linkStyle}>
          <a href="#about">About Me</a>
        </div>
        <div style={linkStyle}>
          <a href="#contact">Contact</a>
        </div>
      </section>
    </nav>
    */
