import { Colors } from "../utils/colors.js";
import { useState, useRef } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import { styles } from "../styles.js";
import { EarthCanvas } from "./canvas";
import { slideIn } from "../utils/motion.js";
import SectionWrapper from "./../hoc/SectionWrapper";

const serviceId = "service_8f8h019";
const templateId = "template_wj7inpt";
const publicKey = "KYhgqhAWoUbV95wIE";
const Contact = () => {
  const ref = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);

  function handleChange(e) {
    const { name, value } = e.target;
    setForm((prevData) => {
      return { ...prevData, [name]: value };
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    if (form.name === "" || form.email === "" || form.message === "") {
      alert("Please fill in all fields..");
      return;
    }
    emailjs
      .send(
        serviceId,
        templateId,
        {
          from_name: form.name,
          to_name: "Ahmed Bahnasy",
          from_email: form.email,
          to_email: "engineerahmedbahnasy@gmail.com",
          message: form.message,
        },
        publicKey
      )
      .then((result) => {
        setLoading(false);
        alert("Thanks for your message! I will get back to you soon ^^");
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((err) => {
        setLoading(false);
        console.error(err);
        alert("Something went wrong. Please try again");
      });
  }

  //original classes : flex-[0.75] bg-black-100 p-8 rounded-2xl

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex  overflow-hidden max-xl:items-center gap-5 xl:justify-between">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="p-8 rounded-2xl bg-black-100  lg:w-[55%] md:w-[70%] sm:w-[85%] w-full"
      >
        <p className={styles.sectionSubText}>Get in touch</p>
        <h3 className={styles.sectionHeadText}>Contact.</h3>
        <form
          ref={ref}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-5  md:gap-6 lg:gap-8 w-full"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Name</span>
            <input
              type="text"
              name="name"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name?"
              className="bg-tertiary px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-xs sm:text-sm md:text-md lg:text-lg  py-4"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Email</span>
            <input
              required
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              placeholder="What's your email?"
              className="bg-tertiary px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium text-xs sm:text-sm md:text-md lg:text-lg  py-4"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">Your Message</span>
            <textarea
              required
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="bg-tertiary px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium  text-xs sm:text-sm md:text-md lg:text-lg  py-4"
            />
          </label>
          <button
            type="submit"
            className={`hover:bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl min-w-full bg-[#A020F0] duration-300`}
          >
            {loading ? "Sending..." : "Send"}
          </button>
          <div className="flex items-center gap-2 w-full justify-center -mt-3">
            <span className="bg-white h-[1px] block w-40"></span>
            <span>Or</span>
            <span className="bg-white h-[1px] block w-40"></span>
          </div>
          <button
            type="button"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/eng-ahmed-bahnasy/",
                "_blank"
              )
            }
            className="w-full bg-[#1c153b] flex flex-col items-center justify-center py-2 gap-2 shadow-md hover:bg-[#0c0b26]  duration-300 rounded-xl hover:shadow-black -mt-3 md:-mt-4 sm:flex-row sm:gap-3"
          >
            Contact me on linkedin
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="1.3em"
              viewBox="0 0 448 512"
              fill="#1976D2"
            >
              <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" />
            </svg>
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className=" xl:h-auto md:h-[550px] h-[350px] xl:w-[45%] w-[80%]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
