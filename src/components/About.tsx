import React from "react";
import { Fade } from "react-awesome-reveal";
import AboutImage from "../images/me.jpg";
import SkillsImage from "../images/skills.png";
import {
  FcBusinesswoman,
  FcCalendar,
  FcPhone,
  FcFeedback,
  FcGraduationCap,
  FcReading,
  FcIdea,
} from "react-icons/fc";

const MY_INFO = [
  {
    title: "최진영",
    icon: <FcBusinesswoman size="30" />,
  },
  {
    title: "95.09.07",
    icon: <FcCalendar size="30" />,
  },
  {
    title: "010-9157-9766",
    icon: <FcPhone size="30" />,
  },
  {
    title: "gnyonge@gmail.com",
    icon: <FcFeedback size="30" />,
  },
  {
    title: "중국 渤海大学(발해대학) 금융학과 졸업",
    icon: <FcGraduationCap size="30" />,
  },
  {
    title: "삼성 청년 소프트웨어 아카데미(SSAFY) 4기 수료",
    icon: <FcReading size="30" />,
  },
];

const About = () => {
  return (
    <div className="py-16" id="about">
      <div className="grid grid-cols-12">
        <div className="col-start-3 col-span-4">
          <Fade cascade>
            <p className="text-5xl font-semibold">About Me</p>
          </Fade>
          <div className="grid grid-cols-2">
            <div className="detail-short">
              <FcBusinesswoman size="30" />{" "}
              <p style={{ paddingBottom: "3px" }}>최진영</p>
            </div>
            <div className="detail-short">
              <FcCalendar size="30" /> <p>95.09.07</p>
            </div>
            <div className="detail">
              <FcPhone size="30" />{" "}
              <p style={{ paddingBottom: "3px" }}>010-9157-9766</p>
            </div>
            <div className="detail">
              <FcFeedback size="30" /> <p>gnyonge@gmail.com</p>
            </div>
          </div>
          <div className="about-details-block">
            <div className="detail">
              <FcGraduationCap size="30" />{" "}
              <p>중국 渤海大学(발해대학) 금융학과 졸업</p>
            </div>
            <div className="detail">
              <FcReading size="30" />{" "}
              <p>삼성 청년 소프트웨어 아카데미(SSAFY) 4기 수료</p>
            </div>
            <div className="detail">
              <FcIdea size="30" /> <p>Skills</p>
            </div>
            <div className="detail">
              <img src={SkillsImage} alt="skills" style={{ width: "90%" }} />
            </div>
          </div>
        </div>
        <div className="image-wrapper col-span-4">
          <img src={AboutImage} alt="about"></img>
        </div>
      </div>
    </div>
  );
};

export default About;
