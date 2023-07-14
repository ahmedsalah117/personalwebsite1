import React from "react";

function Footer() {
  return (
    <footer className="footer text-bg-dark">
      <div className="container">
        <div className="row">
          <div className="col-md-6 footer__summary">
            <h2>Ahmed Bahnasy</h2>
            <p>
              A Frontend focused Web Developer building the Frontend of Websites
              and Web Applications that leads to the success of the overall
              product
            </p>
          </div>
          <div className="col-md-6 mt-sm-4 text-md-end">
            <div className="footer__icons">
              <h2>Social</h2>

              <a
                href="https://www.linkedin.com/in/eng-ahmed-bahnasy/"
                target="_blank"
              >
                <i className="fa-brands fa-linkedin footer__icons--linkedin"></i>
              </a>

              <a href="https://github.com/ahmedsalah117" target="_blank">
                <i className="fa-brands fa-github"></i>
              </a>
            </div>
          </div>
        </div>
        <hr></hr>
        <p className="text-center mt-5">
          © Copyright 2023. Made by{" "}
          <a
            className="link-underline-warning link-offset-3 link-light"
            href=""
          >
            Ahmed Bahnasy
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
