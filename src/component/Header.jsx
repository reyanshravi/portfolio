import React, { useEffect } from "react";

function Header() {
  useEffect(() => {
    /**
     * element toggle function
     */
    const elemToggleFunc = function (elem) {
      elem.classList.toggle("active");
    };

    /**
     * header sticky & go to top
     */
    const header = document.querySelector("[data-header]");
    const goTopBtn = document.querySelector("[data-go-top]");

    const handleScroll = () => {
      if (window.scrollY >= 10) {
        header.classList.add("active");
        if (goTopBtn) goTopBtn.classList.add("active");
      } else {
        header.classList.remove("active");
        if (goTopBtn) goTopBtn.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    /**
     * navbar toggle
     */
    const navToggleBtn = document.querySelector("[data-nav-toggle-btn]");
    const navbar = document.querySelector("[data-navbar]");

    const handleNavToggle = () => {
      elemToggleFunc(navToggleBtn);
      elemToggleFunc(navbar);
      elemToggleFunc(document.body);
    };

    navToggleBtn.addEventListener("click", handleNavToggle);

    /**
     * skills toggle
     */
    const toggleBtnBox = document.querySelector("[data-toggle-box]");
    const toggleBtns = document.querySelectorAll("[data-toggle-btn]");
    const skillsBox = document.querySelector("[data-skills-box]");

    const handleSkillToggle = (btn) => {
      return () => {
        elemToggleFunc(toggleBtnBox);
        toggleBtns.forEach((btn) => elemToggleFunc(btn));
        elemToggleFunc(skillsBox);
      };
    };

    toggleBtns.forEach((btn) =>
      btn.addEventListener("click", handleSkillToggle(btn))
    );

    /**
     * dark & light theme toggle
     */
    const themeToggleBtn = document.querySelector("[data-theme-btn]");

    const handleThemeToggle = () => {
      elemToggleFunc(themeToggleBtn);

      if (themeToggleBtn.classList.contains("active")) {
        document.body.classList.remove("dark_theme");
        document.body.classList.add("light_theme");

        localStorage.setItem("theme", "light_theme");
      } else {
        document.body.classList.add("dark_theme");
        document.body.classList.remove("light_theme");

        localStorage.setItem("theme", "dark_theme");
      }
    };

    themeToggleBtn.addEventListener("click", handleThemeToggle);

    /**
     * check & apply last time selected theme from localStorage
     */
    if (localStorage.getItem("theme") === "light_theme") {
      themeToggleBtn.classList.add("active");
      document.body.classList.remove("dark_theme");
      document.body.classList.add("light_theme");
    } else {
      themeToggleBtn.classList.remove("active");
      document.body.classList.remove("light_theme");
      document.body.classList.add("dark_theme");
    }

    // Clean up event listeners on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
      navToggleBtn.removeEventListener("click", handleNavToggle);
      toggleBtns.forEach((btn) =>
        btn.removeEventListener("click", handleSkillToggle(btn))
      );
      themeToggleBtn.removeEventListener("click", handleThemeToggle);
    };
  }, []);

  return (
    <header className="header" data-header>
      <div className="container">
        <h1 className="h1 logo">
          <a href="#">
            Reyansh Ravi<span>.</span>
          </a>
        </h1>

        <div className="navbar-actions">
          <button
            className="theme-btn"
            aria-label="Change Theme"
            title="Change Theme"
            data-theme-btn
          >
            <span className="icon"></span>
          </button>
        </div>

        <button
          className="nav-toggle-btn"
          aria-label="Toggle Menu"
          title="Toggle Menu"
          data-nav-toggle-btn
        >
          <span className="one"></span>
          <span className="two"></span>
          <span className="three"></span>
        </button>

        <nav className="navbar" data-navbar>
          <ul className="navbar-list">
            <li>
              <a href="#home" className="navbar-link">
                Home.
              </a>
            </li>

            <li>
              <a href="#about" className="navbar-link">
                About.
              </a>
            </li>

            <li>
              <a href="#skills" className="navbar-link">
                Skills.
              </a>
            </li>

            <li>
              <a href="#portfolio" className="navbar-link">
                Portfolio.
              </a>
            </li>

            <li>
              <a href="#contact" className="navbar-link">
                Contact.
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
