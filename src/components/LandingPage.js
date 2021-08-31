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
          <button>Sign in</button>
          <button>Sign up</button>
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
            <button>
              <span>Check out source code at</span> Github
            </button>
            <button>
              <span>Check out my</span> Personal Portfolio
            </button>
          </div>
          <div className="social-media">
            <a href="">
              <LinkedInIcon className="logo-icon" />
            </a>
            <a href="">
              <GitHubIcon className="socialMedia-icons" />
            </a>
          </div>
        </div>
        <img style={{width: "40vw"}} className="right-illustation" src={landing} alt="Design purpose" />
      </div>
      <div className="common-footer">
        <p>Developed by Pearl Arora on React</p>
      </div>
    </div>
  );
}

export default LandingPage;
