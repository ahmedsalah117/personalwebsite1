import React, { useEffect, useState } from "react";

const options = {
  root: null,
  threshold: 0,
};

function Nav() {
  const [navLight, setNavDark] = useState(false);
  function navColorChange(entries, observer) {
    const [entry] = entries;

    if (entry.isIntersecting) {
      setNavDark(false);
    } else {
      setNavDark(true);
    }
  }

  const observer = new IntersectionObserver(navColorChange, options);

  useEffect(() => {
    observer.observe(document.getElementById("home"));
  }, []);

  //Activating the link associated to each section when the cx scrolls to that section.

  function activeLinkHandler() {
    const allSecs = document.querySelectorAll("section");
    const secTops = Array.from(allSecs).map((sec) => {
      return sec.getBoundingClientRect().top;
    });
    window.addEventListener("scroll", (e) => {
      secTops.forEach((secTop, index) => {
        if (window.scrollY > secTop) {
          const allLinks = document.querySelectorAll("nav a");
          allLinks.forEach((link) => {
            return link.classList.remove("active-link");
          });
          switch (index) {
            case 0:
              document
                .querySelector("nav .home-link")
                .classList.add("active-link");
              break;
            case 1:
              document
                .querySelector("nav .about-link")
                .classList.add("active-link");
              break;
            case 2:
              document
                .querySelector("nav .experience-link")
                .classList.add("active-link");
              break;
            case 3:
              document
                .querySelector("nav .portfolio-link")
                .classList.add("active-link");
              break;
            case 4:
              document
                .querySelector("nav .contact-link")
                .classList.add("active-link");
          }
        }
      });
    });
  }

  useEffect(() => {
    activeLinkHandler();
  }, []);

  return (
    <>
      <nav
        className={`navbar fixed-top pt-2 ${
          navLight ? "bg-white text-dark-emphasis" : ""
        } w-100 navbar-expand-lg  m-auto`}
      >
        <div className="container-fluid w-80">
          <a
            id="logo"
            className={`navbar-brand ${navLight ? "text-black" : ""} fw-bold`}
            href="#"
          >
            Ahmed Bahnasy
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    navLight ? "text-black" : ""
                  } home-link`}
                  aria-current="page"
                  href="#"
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    navLight ? "text-black" : ""
                  } about-link`}
                  href="#about"
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    navLight ? "text-black" : ""
                  } experience-link`}
                  href="#experience"
                >
                  Experience
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    navLight ? "text-black" : ""
                  } portfolio-link`}
                  href="#portfolio"
                >
                  Portfolio
                </a>
              </li>
              <li className="nav-item">
                <a
                  className={`nav-link ${
                    navLight ? "text-black" : ""
                  } contact-link`}
                  href="#contact"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      ;
    </>
  );
}

export default Nav;
