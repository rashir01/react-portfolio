/* eslint-disable react/jsx-no-target-blank */
import React from "react";

// This List component accepts props from App.js
// We pluck off the "users" property of the props object using destructuring assignment
// This prevents us from having to type `props.users` each time we want to refer to the users object
export default function Intro() {
  return (
    <section>
      <div id="projects" className="projects">
        <div className="container flex">
          <h2>Projects</h2>
          <div className="card project2">
            <div className="collapsible">
              <h3>WhereToMovie</h3>
              <h4>Movie Watch List</h4>
            </div>
            <div>
              <p>
                This is an app that let's a user create a movie watch list.
                Users can search for a movie, and if found will be able to add
                it to their watch list. The app will provide links on where this
                movie is currently being streamed.
              </p>
              <p>
                <a href="https://wheretomovie.herokuapp.com/" target="_blank">
                  Deployed Project
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/egraham96/Where-to-Watch#readme"
                  target="_blank"
                >
                  Project Repo
                </a>
              </p>
              <img
                src="./assets/images/wheretomoviescreenshot.png"
                alt="stock news screenshot"
              />
            </div>
          </div>
          <br />
          <div className="card project2">
            <div className="collapsible">
              <h3>My Rants</h3>
              <h4>A post and comment app</h4>
            </div>
            <div>
              <p>
                A tool web app where users can post about anything. Other users
                are also able to view and comment on the posts if they have an
                account created.
              </p>
              <p>
                <a href="https://myrants.herokuapp.com/" target="_blank">
                  Deployed Project
                </a>
              </p>
              <p>
                <a href="https://github.com/rashir01/myrants" target="_blank">
                  Project Repo
                </a>
              </p>
              <img
                src="./assets/images/myrantsscreenshot.png"
                alt="stock news screenshot"
              />
            </div>
          </div>
          <br />
          <div className="card project2">
            <div className="collapsible">
              <h3>SnewZ</h3>
              <h4>Stock Price and News Tracker</h4>
            </div>
            <div>
              <p>
                A tool used to retrieve a company stock price and information
                about it. Using third party APIs, this tool will search a stock
                price and news by the company symbol. Previous searches will be
                available easily to users in order to switch in between them.
                This project is a collaborative group effort.
              </p>
              <p>
                <a href="https://sjrohrxd.github.io/SNEWZ/" target="_blank">
                  Deployed Project
                </a>
              </p>
              <p>
                <a href="https://github.com/SJROHRXD/SNEWZ" target="_blank">
                  Project Repo
                </a>
              </p>
              <img
                src="./assets/images/snewz.png"
                alt="stock news screenshot"
              />
            </div>
          </div>
          <br />
          <div className="card project2">
            <div className="collapsible">
              <h3>ForecastMe!</h3>
              <h4>A Weather App</h4>
            </div>
            <div>
              <p>
                A web application where users are able to search the weather for
                a given city. Utilizing an open weather API, current and five
                day forcast is presented to the user. Users are also able to
                quickly jump to their most recently searched city
              </p>
              <p>
                <a
                  href="https://rashir01.github.io/ForecastMe/"
                  target="_blank"
                >
                  Deployed Project
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/rashir01/ForecastMe"
                  target="_blank"
                >
                  Project Repo
                </a>
              </p>
              <img
                src="./assets/images/weather.png"
                alt="Weather Forcast screenshot"
              />
            </div>
          </div>
          <br />
          <div className="card project2">
            <div className="collapsible">
              <h3>Work Day Scheduler!</h3>
              <h4>A Day Planner App</h4>
            </div>
            <div>
              <p>
                A web application that helps users manage their daily tasks.
                Users are presented with a workday calendar where they add their
                tasks and it will be saved in the local storage.
              </p>
              <p>
                <a
                  href="https://rashir01.github.io/PlanYourDay/"
                  target="_blank"
                >
                  Deployed Project
                </a>
              </p>
              <p>
                <a
                  href="https://github.com/rashir01/PlanYourDay"
                  target="_blank"
                >
                  Project Repo
                </a>
              </p>
              <img
                src="./assets/images/workdayscheduler.png"
                alt="Day Planner screenshot"
              />
            </div>
          </div>
          <br />
        </div>
      </div>
    </section>
  );
}
