import React from "react";

// This List component accepts props from App.js
// We pluck off the "users" property of the props object using destructuring assignment
// This prevents us from having to type `props.users` each time we want to refer to the users object
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
