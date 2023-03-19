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
  {
    title: "Skills",
    icon: <FcIdea size="30" />,
  },
];

const About = () => {
  return (
    <div className="py-16" id="about">
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-start-3 col-span-4">
          <Fade cascade>
            <p className="text-5xl font-semibold text-start mb-12">About Me</p>
          </Fade>
          <div className="grid grid-cols-2 gap-y-4">
            {MY_INFO.slice(0, 4).map(({ title, icon }) => (
              <div className="flex gap-x-2 items-center">
                {icon}
                <p>{title}</p>
              </div>
            ))}
          </div>
          <div className="grid gap-y-4 mt-4">
            {MY_INFO.slice(4, 7).map(({ title, icon }) => (
              <div className="flex gap-x-2 items-center">
                {icon}
                <p>{title}</p>
              </div>
            ))}
            <div>
              <img src={SkillsImage} alt="skills" className="w-full" />
            </div>
          </div>
        </div>
        <div className="col-span-4">
          <img src={AboutImage} alt="about" />
        </div>
      </div>
    </div>
  );
};

export default About;
