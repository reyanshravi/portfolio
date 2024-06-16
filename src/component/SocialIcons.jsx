import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faInstagram,
  faLinkedinIn,
  faTelegram,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";

const SocialIcons = () => {
  return (
    <section className="hidden lg:block fixed bottom-6 left-6">
      <div className="flex flex-col items-center space-y-5 text-gray-700">
        <ul className="flex flex-col items-center space-y-3">
          <li>
            <a href="http://google.com" className="text-2xl hero-social-link">
              <div className="tooltip">Github</div>
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </li>
          <li>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hero-social-link"
            >
              <div className="tooltip">Instagram</div>
              <FontAwesomeIcon icon={faInstagram} />
            </a>
          </li>
          <li>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hero-social-link"
            >
              <div className="tooltip">LinkedIn</div>
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
          </li>
          <li>
            <a
              href="http://"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hero-social-link"
            >
              <div className="tooltip">Telegram</div>
              <FontAwesomeIcon icon={faTelegram} />
            </a>
          </li>
          <li>
            <a
              href="whatsapp://send?phone=918298922623&text=Hi"
              target="_blank"
              rel="noopener noreferrer"
              className="text-2xl hero-social-link"
            >
              <div className="tooltip">Whatsapp</div>
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
          </li>
          <li className="relative mt-10 h-20 w-px bg-gray-500"></li>
        </ul>
      </div>
      <div className="flex flex-col items-center text-gray-700 fixed bottom-0 right-[-90px]">
        <ul className="flex flex-col items-center pb-4">
          <li className="transform rotate-90">
            <a
              href="mailto:ravi8298922623@gmail.com"
              className="text-md tracking-widest font-normal"
            >
              ravi8298922623@gmail.com
            </a>
          </li>
          <li className="relative mt-32 h-20 w-px bg-gray-500"></li>
        </ul>
      </div>
    </section>
  );
};

export default SocialIcons;
