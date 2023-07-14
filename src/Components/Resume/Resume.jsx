import React, { useEffect } from "react";

let render = 0;

function Resume() {
  function secLoading(entries, observer) {
    const [entry] = entries;
    if (!render) {
      render++;
      return;
    }
    entry.target.classList.remove("section-hidden");
    entry.target.classList.add("section-visible");
    observer.unobserve(entry.target);
    render++;
  }

  const resumeBoxObserver = new IntersectionObserver(secLoading, {
    root: null,
    threshold: 0.05,
  });

  useEffect(() => {
    const resumeBoxes = document.querySelectorAll(".resume__box");
    resumeBoxes.forEach((box) => {
      box.classList.add("section-hidden");
      return resumeBoxObserver.observe(box);
    });
  }, []);

  return (
    <>
      <section className="resume" id="experience">
        <dir className="w-80 m-auto">
          <h4 className="rounded-2">Work Experience</h4>
          <div className="container">
            <div className="row">
              <div className="col-md-2  resume__icon-container resume__icon-container--first">
                <i className="fa-solid fa-briefcase rounded-circle"></i>
              </div>
              <div className="col-md-10 resume__box rounded-5">
                <h5>Business Technical Support & Billing Agent</h5>
                <h6>Altice USA | Apr 2022 - Dec 2022</h6>
                <p>
                  • Represented the First-level of Business customer
                  troubleshooting to Altice business customers, over the phone,
                  for the Altice business Voice, Altice Business Online, Altice
                  One, etc.<br></br>• Managed to resolve over 85% of customer
                  issues during first contact, resulting in 98% customer
                  satisfaction ratings.<br></br>• Reduced customer waiting times
                  by 20%, shortened customer resolution times by 15%, and
                  successfully processed 95% of all escalated customer cases.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2  resume__icon-container resume__icon-container--second">
                <i className="fa-solid fa-briefcase rounded-circle"></i>
              </div>

              <div className="col-md-10 resume__box rounded-5">
                <h5>Corporate Executive Customer Relations Specialist</h5>
                <h6>Altice USA | Nov 2021 - Mar 2022</h6>
                <p>
                  • Represented the face of Altice USA, ensuring a world-class
                  customer service experience. <br></br>• Responsible for
                  resolving the most highly escalated customer-initiated issues
                  received by internal, and partner employees, agencies, and
                  executives to obtain the best possible resolution while
                  maintaining the highest professional standards.<br></br> •
                  Improved complaint resolution time frame by 30%, and exceeded
                  customer satisfaction score from 90% to 98%. <br></br>•
                  Collaborated with internal departments to provide real-time
                  support, thus addressing and resolving more than 50% of
                  customer issues within one hour
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2  resume__icon-container resume__icon-container--third">
                <i className="fa-solid fa-briefcase rounded-circle"></i>
                {/* <i class="fa-solid fa-pencil rounded-circle"></i> */}
              </div>
              <div className="col-md-10 resume__box rounded-5">
                <h5>Residential Technical Support & Billing Agent</h5>
                <h6>Altice USA | May 2020 - Oct 2021</h6>
                <p>
                  • Successfully resolved technical issues and billing inquiries
                  for a huge number of residential customers on a daily basis,
                  maintaining a customer satisfaction rating of 98%.<br></br> •
                  Consistently met or exceeded monthly performance targets for
                  first-call resolution, and average handling time.<br></br> •
                  Maintained accurate and up-to-date records of customer
                  interactions, technical issues, and billing inquiries in the
                  company's database, ensuring a smooth handoff to other teams
                  or departments as necessary.<br></br> • Consistently received
                  positive feedback from customers and supervisors for excellent
                  communication skills, problem-solving ability, and commitment
                  to providing exceptional customer service.<br></br> •
                  Demonstrated flexibility and adaptability by quickly learning
                  and mastering new technologies, products, and services
                  introduced to the market.
                </p>
              </div>
            </div>
          </div>
          <h4 className="mt-5 rounded-2">Education</h4>
          <div className="container">
            <div className="row">
              <div className="col-md-2  resume__icon-container resume__icon-container--first">
                <i className="fa-solid fa-briefcase rounded-circle"></i>
              </div>
              <div className="col-md-10 resume__box rounded-5 ">
                <h5>Front end web diploma | React Js</h5>
                <h6>
                  Route IT Training Center - Cairo, Egypt | Jul 2022 - Dec 2022
                </h6>
                <p>
                  Throughout the program I gained comprehensive knowledge and
                  practical experience in several technologies essential to
                  build modern web applications. I learned HTML, CSS, Sass,
                  Bootstrap, JavaScript, TypeScript, jQuery, and React JS and
                  applied these skills to develop various projects.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2  resume__icon-container resume__icon-container--second">
                <i className="fa-solid fa-briefcase rounded-circle"></i>
              </div>

              <div className="col-md-10 resume__box rounded-5">
                <h5>Computer Science Fundamentals Diploma</h5>
                <h6>
                  Route IT Training Center - Cairo, Egypt | Jul 2022 - Nov 2022
                </h6>
                <p>
                  Studied programming from scratch moving forward to more
                  advanced topics such as Data structure, Algorithms, and OOP
                  using the c++ and Java programming languages.
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-2  resume__icon-container resume__icon-container--third resume__icon-container--third--education">
                <i className="fa-solid fa-briefcase rounded-circle"></i>
              </div>
              <div className="col-md-10 col-xs-12 resume__box rounded-5">
                <h5>Bachelor's Degree In Civil Engineering</h5>
                <h6>Benha University - Benha, Egypt | 2016 - 2021 Good ++</h6>
                <p>
                  I have completed a rigorous five-year course of study that has
                  prepared me for a civil engineering career. Throughout my
                  studies, I gained a broad range of knowledge and skills in the
                  various sub-disciplines of civil engineering, including
                  structural design, surveying, and site engineering. During the
                  first year of my program, I completed a preparatory year that
                  provided me with a solid foundation in mathematics, physics,
                  and other core subjects. The remaining four years were
                  dedicated to specialized civil engineering coursework,
                  including courses in structural design of steel and concrete
                  buildings, and survey works. As part of my studies, I also
                  completed a graduation project in Survey, which involved using
                  advanced surveying techniques and equipment to conduct
                  topographic and boundary surveys for a real-world site.
                  Through this project, I gained hands-on experience in data
                  collection, analysis, and interpretation, as well as in the
                  use of software tools such as AutoCAD and ArcGIS.
                </p>
              </div>
            </div>
          </div>
        </dir>
      </section>
    </>
  );
}

export default Resume;
