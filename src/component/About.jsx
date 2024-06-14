import React from "react";
import aboutBanner from "../assets/images/about-banner.png";

function About() {
  return (
    <section className="about" id="about">
      <figure className="about-banner">
        <img
          src={aboutBanner}
          alt="A man in a alice blue shirt with a thinking expression"
          className="w-100"
        />
      </figure>

      <div className="about-content section-content">
        <p className="section-subtitle">About me</p>
        <h2 className="h3 section-title">
          Need a Creative Product? I can Help You!
        </h2>
        <p className="section-text">
          Hi! I’m Reyansh Ravi, a developer passionate about creating clean and
          functional web applications. I love turning ideas into reality with
          creative solutions and constantly seek to learn new skills and tools.
          I've worked on many solo full stack projects and collaborated with
          teams, handling daily stand-ups, communication, source control, and
          project management.
        </p>
        <div className="btn-group">
          <button className="btn btn-secondary">Hire me</button>
          <button className="btn btn-primary">Download cv</button>
        </div>
      </div>
    </section>
  );
}

export default About;
