import React, { useState, useEffect } from "react";

// Importing images
import html5Logo from "../assets/images/html5.png";
import css3Logo from "../assets/images/css3.png";
import javascriptLogo from "../assets/images/javascript.png";
import bootstrapLogo from "../assets/images/bootstrap.png";
import reactLogo from "../assets/images/react.png";
import firebaseLogo from "../assets/images/firebase.png";
import sassLogo from "../assets/images/sass.png";
import ajaxLogo from "../assets/images/ajax.png";
import gitLogo from "../assets/images/git.png";
import npmLogo from "../assets/images/npm.png";
import commandLogo from "../assets/images/command.png";
import vscodeLogo from "../assets/images/vs-code.png";
import clickupLogo from "../assets/images/clickup.png";
import photoshopLogo from "../assets/images/photoshop.png";
import adobexdLogo from "../assets/images/adobe-xd.png";

const Skills = () => {
  return (
    <section className="skills" id="skills">
      <div className="skills-content section-content">
        <p className="section-subtitle">My skills</p>
        <h2 className="h3 section-title">
          What My Programming Skills Included?
        </h2>
        <p className="section-text">
          I develop simple, intuitive and responsive user interface that helps
          users get things done with less effort and time with those
          technologies.
        </p>
        <div className="skills-toggle" data-toggle-box>
          <button
            className="toggle-btn active bg-orange-400 rounded-full"
            data-toggle-btn
          >
            My Skills
          </button>
        </div>
      </div>

      <div className="skills-box active" data-skills-box>
        <ul className="tools-list">
          <li>
            <div className="skill-card">
              <div className="tooltip">HTML5</div>
              <div className="card-icon">
                <img src={html5Logo} alt="HTML5 logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">CSS3</div>
              <div className="card-icon">
                <img src={css3Logo} alt="CSS3 logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">JavaScript</div>
              <div className="card-icon">
                <img src={javascriptLogo} alt="JavaScript logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Bootstrap</div>
              <div className="card-icon">
                <img src={bootstrapLogo} alt="Bootstrap logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">React</div>
              <div className="card-icon">
                <img src={reactLogo} alt="React logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">AppWrite</div>
              <div className="card-icon">
                <img src={firebaseLogo} alt="Firebase logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">SASS</div>
              <div className="card-icon">
                <img src={sassLogo} alt="SASS logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Ajax</div>
              <div className="card-icon">
                <img src={ajaxLogo} alt="Ajax logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Git</div>
              <div className="card-icon">
                <img src={gitLogo} alt="Git logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Npm</div>
              <div className="card-icon">
                <img src={npmLogo} alt="Npm logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Command Line</div>
              <div className="card-icon">
                <img src={commandLogo} alt="Command Line logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">VS Code</div>
              <div className="card-icon">
                <img src={vscodeLogo} alt="VS Code logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Photoshop</div>
              <div className="card-icon">
                <img src={photoshopLogo} alt="Photoshop logo" />
              </div>
            </div>
          </li>
          <li>
            <div className="skill-card">
              <div className="tooltip">Adobe XD</div>
              <div className="card-icon">
                <img src={adobexdLogo} alt="Adobe XD logo" />
              </div>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
