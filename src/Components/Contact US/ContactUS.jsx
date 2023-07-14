import React, { useEffect } from "react";

function ContactUS() {
  function contactShowHandler(entries, observer) {
    const [entry] = entries;
    if (entry.isIntersecting) {
      entry.target.classList.remove("section-hidden");
      entry.target.classList.add("section-visible");
    }
  }
  const contactObserver = new IntersectionObserver(contactShowHandler, {
    root: null,
    threshold: 0.15,
    // rootMargin: "30px",
  });

  useEffect(() => {
    const contactForm = document.querySelector(".contactUS");
    contactForm.classList.add("section-hidden");
    contactObserver.observe(contactForm);
  }, []);

  return (
    <>
      <section className="contactUS text-center" id="contact">
        <div className="w-80 m-auto">
          <h2>Contact</h2>
          <h3 className="w-80">
            Feel free to Contact me by submitting the form below and I will get
            back to you as soon as possible
          </h3>

          <div className="col-lg-7 col-sm-10 col-xs-12 m-auto contactUS__container text-start">
            <form
              action="https://formspree.io/f/xjvdqdla"
              method="POST"
              className="bg-white"
            >
              <label htmlFor="name">Name</label>
              <input
                className="form-control rounded-4"
                type="text"
                id="name"
                placeholder="Enter Your Name"
                required
                name="name"
              ></input>

              <label htmlFor="email">Email</label>
              <input
                className="form-control rounded-4"
                type="email"
                id="email"
                placeholder="Enter Your Email"
                required
                name="email"
              ></input>

              <label htmlFor="subject">Subject</label>
              <input
                className="form-control rounded-4"
                type="text"
                id="subject"
                placeholder="Enter The Subject"
                required
                name="subject"
              ></input>

              <label htmlFor="message">Message</label>
              <textarea
                className="form-control rounded-4"
                id="message"
                placeholder="Enter Your Message"
                required
                name="message"
              ></textarea>
              <button className="btn-form">Send Message</button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}

export default ContactUS;
