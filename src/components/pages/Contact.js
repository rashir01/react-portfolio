import React from "react";

export default function Contact() {
  return (
    <section>
      <div id="contact" className="contact">
        <div className="container flex">
          <h2>Contact</h2>

          <div className="card">
            <p>For questions please contact using the links below</p>
          </div>
          <div className="card">
            <p>
              <a href="mailto:ray.seng.dev@gmail.com">ray.seng.dev@gmail.com</a>
            </p>
            <p>
              <a href="https://github.com/rashir01/">Github Repo</a>
            </p>
            <p>
              <a href="https://linkedin.com/in/ray-ashir-75521620">LinkedIn</a>
            </p>
            <p>
              <a href="./assets/files/RayAshirResumeFullStack.pdf">Resume</a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
