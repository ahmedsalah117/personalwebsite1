import React, { useEffect } from "react";
import aboutImg from "./../../assets/profile.jpg";
import cvFile from "./../../assets/CV - Ahmed Bahnasy - Front End Web Developer _ React JS.pdf";
function About() {
  // function ImgMouseMoveHandler(targetSec) {
  //   targetSec.addEventListener("mousemove", (e) => {
  //     const xCoord = e.movementX;
  //     const yCoord = e.movementY;
  //     const img = document.querySelector("#about img");

  //     img.style.transform = `translate(${xCoord > 0 ? "-5px" : "5px"},${
  //       yCoord > 0 ? "-5px" : "5px"
  //     })`;
  //   });
  // }

  function ImgMouseMoveHandler(event) {
    const xCoord = event.movementX;
    const yCoord = event.movementY;
    const img = document.querySelector("#about img");

    img.style.transform = `translate(${xCoord > 0 ? "-5px" : "5px"},${
      yCoord > 0 ? "-5px" : "5px"
    })`;
  }

  // useEffect(() => {
  //   const target = document.getElementById("about");
  //   // ImgMouseMoveHandler(target);
  //   // return () => {
  //   //   console.log("event removed");
  //   //   target.removeEventListener("mousemove", (e) => {});
  //   // };
  // }, []);

  return (
    <>
      <section
        id="about"
        className="about"
        onMouseMove={(e) => {
          ImgMouseMoveHandler(e);
        }}
      >
        <div className="container-fluid w-80 ">
          <div className="row">
            <div className="col-xs-12 col-lg-4 pe-5 ps-0 mb-5">
              <figure className="text-center about__fig-frame">
                <img
                  className="w-100"
                  src={aboutImg}
                  alt="Engineer Ahmed Bahnasy's photo"
                />
              </figure>
              <div className="about__icons text-center">
                <h2>Social</h2>

                <a
                  href="https://www.linkedin.com/in/eng-ahmed-bahnasy/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin about__icons--linkedin"></i>
                </a>

                <a href="https://github.com/ahmedsalah117" target="_blank">
                  <i className="fa-brands fa-github"></i>
                </a>
              </div>
            </div>
            <article className="col-xs-12 col-lg-8 about__info">
              <div className="">
                <h4 className="mb-5 about__info--head4">I'm Ahmed Bahnasy.</h4>
                <p className="mb-5 about__summary">
                  As a Front End Web Developer with experience in React JS, I
                  bring a passion for designing and building interactive web
                  applications. I have a strong foundation in HTML, CSS, and
                  JavaScript, and am committed to staying up-to-date with the
                  latest trends and technologies in the field. My experience in
                  building responsive websites and creating visually appealing
                  and user-friendly designs has given me the ability to create
                  functional websites. I am a fast learner, and a team player,
                  and am eager to contribute my skills and knowledge to help
                  build innovative and engaging web applications.
                </p>
              </div>
              <aside className="row m-0 about__details">
                <div className="col-xs-12 col-xl-7">
                  <div>
                    <i className="fa-solid fa-cake-candles"></i>{" "}
                    <span className="me-4"> Birthday: </span>
                    <span>July, 11th, 1998</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-location-dot"></i>
                    <span className="me-4"> Location: </span>
                    <span>Cairo, Egypt</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-book-open-reader"></i>
                    <span className="about__details--study"> Study: </span>
                    <span>Civil Engineering</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-envelope"></i>
                    <span className="about__details--email"> Email: </span>
                    <span>engineerahmedbahnasy@gmail.com</span>
                  </div>
                </div>
                <div className="col-xs-12 col-xl-5">
                  <div>
                    <i className="fa-solid fa-calendar-days"></i>
                    <span className="about__age"> Age: </span>
                    <span>25</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-gamepad"></i>
                    <span className="me-3"> Interests: </span>
                    <span>GYM, Reading</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-graduation-cap"></i>
                    <span className="about__degree"> Degree: </span>
                    <span>Bachelor</span>
                  </div>
                  <div>
                    <i className="fa-solid fa-phone"></i>
                    <span className="about__phone"> phone: </span>
                    <span>+201024768040</span>
                  </div>
                </div>
              </aside>
              <div className="about__CV mt-5 ps-3">
                <a
                  href={cvFile}
                  download={"CV-EngAhmedBahnasy-FrontEndDeveloper-ReactJS"}
                  className="btn-main"
                  target="_blank"
                >
                  Download CV
                </a>
              </div>
            </article>
          </div>
        </div>
      </section>
    </>
  );
}

export default About;
