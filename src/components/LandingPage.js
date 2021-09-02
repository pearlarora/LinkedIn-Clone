import React from "react";
import "./css/LandingPage.css";
import landing from "../components/css/assets/landing.png";

// Material UI
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GitHubIcon from "@material-ui/icons/GitHub";

function LandingPage() {
  return (
    <div className="landing-page">
      <div className="landing-header">
        <div className="logo">
          <h1>Linked</h1>
          <LinkedInIcon className="logo-icon" />
        </div>
        <div className="landing-buttons">
          <a href="/signin">
            <button>Sign in</button>
          </a>
          <a href="/signup">
            <button>Sign up</button>
          </a>
        </div>
      </div>
      <div className="common-component landing-component">
        <div className="left-desc">
          <h1>
            Welcome to <br /> LinkedIn Clone
          </h1>
          <p>
            Developed by <b>Pearl Arora</b>
          </p>
          <div className="landing-buttons">
            <a href="https://github.com/pearlarora/LinkedIn-Clone">
              <button>
                <span>Check out source code at</span> Github
              </button>
            </a>
            <a href="https://pearlarora.github.io/Designique-portfolio/">
              <button>
                <span>Check out my</span> Personal Portfolio
              </button>
            </a>
          </div>
          <div className="social-media">
            <a href="https://www.linkedin.com/in/pearlarora/">
              <LinkedInIcon className="logo-icon" />
            </a>
            <a href="https://github.com/pearlarora">
              <GitHubIcon className="socialMedia-icons" />
            </a>
          </div>
        </div>
        <img
          style={{ width: "40vw" }}
          className="right-illustation"
          src={landing}
          alt="Design purpose"
        />
      </div>
      <div className="common-footer">
        <p>Developed by Pearl Arora on React</p>
      </div>
    </div>
  );
}

export default LandingPage;
