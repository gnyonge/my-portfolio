import Slider from "react-slick";
import "../../styles/slick.css";
import "../../styles/slick-theme.css";
import Walk1 from "../../images/기록일지.png";
import Walk2 from "../../images/산책1.png";
import Walk3 from "../../images/산책2.png";
import Walk4 from "../../images/성분분석.png";
import Walk5 from "../../images/마이페이지.png";
import Walk6 from "../../images/로그인_회원가입.png";
import { SETTINGS } from ".";
import { FcCheckmark } from "react-icons/fc";

const WalkieDoggie = () => {
  const WalkImages = [Walk1, Walk2, Walk3, Walk4, Walk5, Walk6];
  const walkDesc = [
    {
      title: "My role",
      content: "UI/UX 디자인, 프론트엔드 (일기, 성분분석, 마이페이지) ",
    },
    {
      title: "Front-end",
      content: "Vue.js, Vuex, Vuetify",
    },
    {
      title: "Back-end",
      content: "Spring Boot, Nginx, Jenkins",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-3xl p-8">
      <p className="text-4xl font-semibold">Walkie Doggie (워키도기)</p>
      <p className="text-gray-400 font-medium mt-6 mb-12">
        2021.04.12 ~ 2021.05.28 (6人 팀 프로젝트)
      </p>
      <div className="grid place-items-center">
        <div className="walk-carousel">
          <Slider {...SETTINGS}>
            {WalkImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${image}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-start mt-12">
          <p>
            <span className="font-semibold">
              반려견과 견주를 위한 위치기반 종합 서비스
            </span>
            입니다. <br />
            <br />
            주요 기능은{" "}
            <span className="font-semibold">
              반려견 일기 및 산책기록 확인, 실시간 산책경로 확인 및 현재 위치를
              기반으로한 SNS기능, OCR을 이용한 사료, 간식 성분분석
            </span>
            이 있습니다. <br />
            <br />
            프로젝트 도중, 오류가 많아서 개발 진행에 어려움이 있었습니다. 하지만{" "}
            <span className="font-semibold">비동기처리를 적용하고 해결</span>
            해보면서 자바스크립트에 대한 개념을 더욱 확실하게 익힐 수 있었고
            어려움을 극복하면서 개발에 더 재미를 느꼈습니다. <br />
            <br />
            <span className="font-semibold">사용자를 위한 UI/UX 개선</span>을
            위해 전체적인 디자인도 중간에 새롭게 수정을 하였습니다. 시간이
            부족해 고민도 하였지만 사용자의 입장에서 보았을 때 훨씬 나은
            결과물을 내었습니다. <br />
            <br />
            <span className="font-semibold">
              라우팅을 하면서 탭이 같이 이동하지 않는 문제, 지도에 핀이 찍히지
              않는 문제
            </span>
            와 같이 개발 도중에 잘 해결되지 않는 문제들을 서로 도와주고 해결해
            나가면서 팀워크도 더 좋아지고{" "}
            <span className="font-semibold">
              스스로 성장을 굉장히 많이 했던 프로젝트
            </span>
            입니다.
            <br />
            <br />
            <hr />
            <br />
          </p>
          {walkDesc.map((desc, index) => (
            <div className="grid grid-cols-4" key={index}>
              <div className="col-span-1 flex items-center font-semibold gap-x-2">
                <FcCheckmark size="30" />
                <p>{desc.title}</p>
              </div>
              <div className="col-span-3 flex items-center">{desc.content}</div>
            </div>
          ))}
          <div className="grid grid-cols-4">
            <div className="col-span-1 flex items-center font-semibold gap-x-2">
              <FcCheckmark size="30" />
              <p>GitHub</p>
            </div>
            <div className="col-span-3 underline hover:text-gray-500 flex items-center">
              <a
                href="https://github.com/gnyonge/Walkie-Doggie"
                target="_blank"
                rel="noreferrer"
              >
                바로가기
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WalkieDoggie;
