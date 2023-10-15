import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import { motion } from "framer-motion";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles.js";
import { experiences } from "../constants/index.js";
import SectionWrapper from "./../hoc/SectionWrapper.jsx";
import { textVariant } from "../utils/motion.js";

function ExperienceCard({ experience }) {
  return (
    <>
      <VerticalTimelineElement
        contentStyle={{
          background: "#1d1836",
          color: "#fff",
        }}
        contentArrowStyle={{ borderRight: "7px solid #232631" }}
        date={experience.date}
        iconStyle={{ background: experience.iconBg }}
        icon={
          <div className="w-full h-full flex justify-center items-center ">
            <img
              src={experience.icon}
              alt={experience.company_name}
              className="w-[100%] h-[100%] object-cover rounded-full"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-white text-[24px] font-bold">
            {experience.title}
          </h3>
          <p
            className="text-white text-[16px] font-semibold"
            style={{ margin: 0 }}
          >
            {experience.company_name}
          </p>
        </div>
        <ul className="mt-5 list-disc ml-5 space-y-2">
          {experience.points.map((point, index) => (
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          ))}
        </ul>
      </VerticalTimelineElement>
    </>
  );
}
const Experience = () => {
  return (
    <motion.div variants={textVariant()}>
      <p className={styles.sectionSubText}>WHAT I HAVE DONE SO FAR</p>
      <h2 className={styles.sectionHeadText}>Work Experience.</h2>
      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </VerticalTimeline>
      </div>
    </motion.div>
  );
};

export default SectionWrapper(Experience, "experience");
