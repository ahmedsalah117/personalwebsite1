import React, { useEffect } from "react";
import Nav from "../Nav/Nav.jsx";
import profileImg from "./../../assets/profile.jpg";
import Typed from "typed.js";

function Home() {
  // `Ahmed <span class="home-sec__bahnasy">Bahnasy</span>`,
  //       `Front End Developer | <span class="main-color"> React JS</span>
  useEffect(() => {
    const typed = new Typed(document.querySelector(".home-sec h1"), {
      strings: [
        `Ahmed Bahnasy`,
        `Front End Developer | React JS
        `,
      ],
      typeSpeed: 40,
      backSpeed: 50,
      backDelay: 700,
      loop: true,
      loopCount: Infinity,
      showCursor: true,
      // cursorChar: "|",
      contentType: "html",
    });

    return () => {
      return typed.destroy();
    };
  }, []);
  return (
    <>
      <section className="home-sec" id="home">
        <Nav />
        <header className="h-100 d-flex align-items-center">
          <div className="w-100">
            <figure className="m-auto w-100 text-center">
              <img
                src={profileImg}
                alt="Eng Ahmed Bahnasy - Front End Web Developer | React JS"
              />

              {/* <h2 className="h4"></h2> */}
              <h1 className="text-center"></h1>
            </figure>
          </div>
        </header>
      </section>
    </>
  );
}

export default Home;
