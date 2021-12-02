import React from "react";

export default function Intro() {
  return (
    <section>
      <div id="home" className="home">
        <div className="container flex">
          <img src="./assets/images/profilepic.png" alt="Ray Ashir" />
          <h2>
            Hello, I'm<span id="name">Ray,</span>software development engineer
            in test, quality engineer and developer in training.{" "}
          </h2>
        </div>
      </div>
    </section>
  );
}
