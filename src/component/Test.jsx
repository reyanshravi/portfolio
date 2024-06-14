import React, { useState } from "react";
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
  const [activeSkill, setActiveSkill] = useState("frontend");

  const toggleSkills = (skill) => {
    setActiveSkill(skill);
  };

  return (
    <section className="skills">
      <div className="skills-toggle" data-toggle-box>
        <button
          onClick={() => toggleSkills("frontend")}
          className={activeSkill === "frontend" ? "active" : ""}
          data-toggle-btn
        >
          Frontend
        </button>
        <button
          onClick={() => toggleSkills("backend")}
          className={activeSkill === "backend" ? "active" : ""}
          data-toggle-btn
        >
          Backend
        </button>
      </div>
      <div
        className={activeSkill === "frontend" ? "active" : ""}
        data-skills-box
      >
        <ul className="skills-list">
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
              <div className="tooltip">Firebase</div>
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
        </ul>
      </div>
      <div
        className={activeSkill === "backend" ? "active" : ""}
        data-skills-box
      >
        <ul className="skills-list">
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
              <div className="tooltip">Firebase</div>
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
        </ul>
      </div>
    </section>
  );
};

export default Skills;
