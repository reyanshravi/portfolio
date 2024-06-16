import React from "react";
import { IonIcon } from "@ionic/react";
import { logoFacebook, logoTwitter, logoLinkedin } from "ionicons/icons";

// Importing images
import heroBanner from "../assets/images/hero-banner.png";
import heroBannerMd from "../assets/images/hero-banner-md.png";
import heroBannerSm from "../assets/images/hero-banner-sm.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <figure className="hero-banner">
        <picture>
          <source srcSet={heroBanner} media="(min-width: 768px)" />
          <source srcSet={heroBannerMd} media="(min-width: 500px)" />
          <img
            src={heroBannerSm}
            alt="A man in a blue shirt with a happy expression"
            className="w-100"
          />
        </picture>
      </figure>

      <div className="hero-content">
        <h2 className="h2 hero-title">We Design & Build Creative Products</h2>
        <a href="#contact" className="btn btn-primary">
          Get in touch
        </a>
      </div>

      {/* <ul className="hero-social-list">
        <li>
          <a href="#" className="hero-social-link">
            <IonIcon icon={logoFacebook} />
            <div className="tooltip">Facebook</div>
          </a>
        </li>

        <li>
          <a href="#" className="hero-social-link">
            <IonIcon icon={logoTwitter} />
            <div className="tooltip">Twitter</div>
          </a>
        </li>

        <li>
          <a href="#" className="hero-social-link">
            <IonIcon icon={logoLinkedin} />
            <div className="tooltip">Linkedin</div>
          </a>
        </li>
      </ul> */}

      {/* <a href="#stats" className="scroll-down mr-10 pr-2">
        <li>ravi8298922623@gmail.com</li>
      </a> */}
    </section>
  );
}

export default Hero;
