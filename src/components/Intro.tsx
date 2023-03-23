import React from "react";
import { Fade } from "react-awesome-reveal";
import "../index.css";

const Intro = () => {
  return (
    <div id="intro" className="flex justify-center h-screen">
      <div className="header-wrapper h-screen flex flex-col items-center justify-center gap-y-8">
        <Fade direction="up">
          <p className="text-sm md:text-lg font-semibold">
            Hi, I'm 최진영{" "}
            <span role="img" aria-label="Emoji">
              👋
            </span>
          </p>
          <div className="text-2xl md:text-5xl font-semibold grid gap-y-5">
            <p>Frontend Developer</p>
            <p>최진영's Portfolio</p>
          </div>
          <div className="text-sm md:text-md font-medium grid gap-y-1">
            <p>안녕하세요.</p>
            <p>배우는 것을 좋아하는 프론트엔드 개발자입니다!</p>
          </div>
          <a href="#about">
            <button className="p-3 mt-8 bg-black text-white transition-all ease-in-out cursor-pointer w-32 rounded-md hover:bg-slate-700 active:bg-slate-800">
              More ↓
            </button>
          </a>
        </Fade>
      </div>
    </div>
  );
};

export default Intro;
