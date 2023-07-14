import React, { useEffect } from "react";
import "animate.css";
import bankist from "./../../assets/Bankist.PNG";
import food from "./../../assets/Foodorder.PNG";
import expenses from "./../../assets/expensesTracker.PNG";
import forkify from "./../../assets/forkify.PNG";
import movies from "./../../assets/movies.PNG";
import games from "./../../assets/Games.PNG";
import mapty from "./../../assets/mapty.PNG";
import crud from "./../../assets/Crud.PNG";
import news from "./../../assets/active-states.jpg";
function Portfolio() {
  function PortfolioShowHandler(targetSec, cards) {
    window.addEventListener("scroll", (e) => {
      const targetSecTop = targetSec.getBoundingClientRect().top;
      if (targetSecTop < 800 && targetSecTop > 0) {
        cards.forEach(async (card) => {
          card.classList.remove("box-hidden");
          card.classList.add("box-visible");
        });
      }
    });
  }

  function noteScrollHandler(entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.remove("section-hidden");
      entry.target.classList.add("section-visible");
    }
  }
  const noteObserver = new IntersectionObserver(noteScrollHandler, {
    root: null,
    threshold: 0.15,
    rootMargin: "20px",
  });
  useEffect(() => {
    const portfolioSec = document.querySelector(".portfolio");
    const cards = document.querySelectorAll(".portfolio__card");
    const portfolioNote = document.querySelector(".portfolio__note");
    portfolioNote.classList.add("section-hidden");
    noteObserver.observe(portfolioNote);
    cards.forEach((card) => {
      return card.classList.add("box-hidden");
    });
    PortfolioShowHandler(portfolioSec, cards);
  }, []);

  return (
    <>
      <section className="portfolio" id="portfolio">
        <div className="text-center">
          <h2>Portfolio</h2>
          <div className="container-fluid w-80">
            <div className="row justify-content-center">
              <div className="col-lg-4 col-xxl-3 col-md-6 portfolio__card">
                <figure className="portfolio__fig w-100 h-100 movies">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={movies}
                    alt="The Movies Website image"
                    loading="lazy"
                  />
                  <figcaption className="portfolio__fig__caption w-100">
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://ahmedsalah117.github.io/The-movies-app/"
                      target="_blank"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://github.com/ahmedsalah117/The-movies-app"
                      target="_blank"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6 portfolio__card">
                <figure className="portfolio__fig w-100 h-100 games">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={games}
                    alt="The Game Over App Image"
                    loading="lazy"
                  />
                  <figcaption className="portfolio__fig__caption w-100 ">
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://ahmedsalah117.github.io/game-over/"
                      target="_blank"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://github.com/ahmedsalah117/game-over"
                      target="_blank"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6 portfolio__card">
                <figure className="portfolio__fig w-100 h-100 forkify">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={forkify}
                    alt="forkify app image"
                    loading="lazy"
                  />
                  <figcaption className="portfolio__fig__caption w-100">
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://6483915c30c84a1898e3cfe9--forkify-ahmed-bahnasy.netlify.app/"
                      target="_blank"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://github.com/ahmedsalah117/forkify-app"
                      target="_blank"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6 portfolio__card ">
                <figure className="portfolio__fig w-100 h-100 mapty">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={mapty}
                    alt="Mapty app image"
                    loading="lazy"
                  />
                  <figcaption className="portfolio__fig__caption w-100">
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://ahmedsalah117.github.io/Mapty-app/"
                      target="_blank"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://github.com/ahmedsalah117/Mapty-app"
                      target="_blank"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-4  col-xxl-3 col-md-6 portfolio__card">
                <figure className="portfolio__fig w-100 h-100 bankist">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={bankist}
                    alt="bankist app image"
                    loading="lazy"
                  />
                  <figcaption className="portfolio__fig__caption w-100">
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://ahmedsalah117.github.io/Bankist-app/"
                      target="_blank"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://github.com/ahmedsalah117/Bankist-app"
                      target="_blank"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-4  col-xxl-3 col-md-6 portfolio__card">
                <figure className="portfolio__fig w-100 h-100 food">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={food}
                    alt="food order app image"
                    loading="lazy"
                  />
                  <figcaption className="portfolio__fig__caption w-100 ">
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://ahmedsalah117.github.io/food-order-application/"
                      target="_blank"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://github.com/ahmedsalah117/food-order-application"
                      target="_blank"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-4  col-xxl-3 col-md-6 portfolio__card">
                <figure className="portfolio__fig w-100 h-100 crud">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={crud}
                    alt="crud system image"
                    loading="lazy"
                  />
                  <figcaption className="portfolio__fig__caption w-100">
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://ahmedsalah117.github.io/CRUD-System/"
                      target="_blank"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://github.com/ahmedsalah117/CRUD-System"
                      target="_blank"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-4  col-xxl-3 col-md-6 portfolio__card">
                <figure className="portfolio__fig w-100 h-100 expenses">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={expenses}
                    alt="Expenses Tracker App"
                    loading="lazy"
                  />
                  <figcaption className="portfolio__fig__caption w-100">
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://ahmedsalah117.github.io/Expenses-Tracker/"
                      target="_blank"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://github.com/ahmedsalah117/Expenses-Tracker"
                      target="_blank"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
              <div className="col-lg-4 col-xxl-3 col-md-6 portfolio__card">
                <figure className="portfolio__fig w-100 h-100 news">
                  <img
                    className="w-100 h-100 object-fit-cover"
                    src={news}
                    alt="The Movies Website image"
                    loading="lazy"
                  />
                  <figcaption className="portfolio__fig__caption w-100">
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://ahmedsalah117.github.io/newsletter-sign-up/"
                      target="_blank"
                    >
                      <i className="fa-solid fa-arrow-up-right-from-square"></i>
                    </a>
                    <a
                      className="btn-portfolio w-50 text-center"
                      href="https://github.com/ahmedsalah117/newsletter-sign-up"
                      target="_blank"
                    >
                      <i className="fa-brands fa-github"></i>
                    </a>
                  </figcaption>
                </figure>
              </div>
            </div>
            <div className="row"></div>
          </div>
          <p className="portfolio__note col-xs-12  rounded-4">
            <span className="portfolio--please">Please Note:</span> Use the
            following email address "
            <span className="portfolio--user">testtest@testtest.com</span> " &
            password " <span className="portfolio--pass">Ahmed@1171998</span> "
            to login to any app if required.
            <br></br>
            For the Bankist App use "{" "}
            <span className="portfolio--user">js</span> " as a username and "
            <span className="portfolio--pass">1111</span>" as a password
          </p>
        </div>
      </section>
    </>
  );
}

export default Portfolio;
