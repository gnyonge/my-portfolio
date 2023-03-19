import Slider from "react-slick";
import "../../styles/slick.css";
import "../../styles/slick-theme.css";
import Poke1 from "../../images/1.png";
import Poke2 from "../../images/2.png";
import Poke3 from "../../images/3.png";
import Poke4 from "../../images/5.png";
import { SETTINGS } from ".";
import { FcCheckmark } from "react-icons/fc";

const Pokemon = () => {
  const pokeImages = [Poke1, Poke2, Poke3, Poke4];
  const pokeDesc = [
    {
      title: "Deployment",
      content: "GitHub pages",
      url: "https://gnyonge.github.io/Pokemon-project/",
    },
    {
      title: "GitHub",
      content: "",
      url: "https://github.com/gnyonge/Pokemon-project",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-3xl p-8">
      <p className="text-4xl font-semibold">포켓몬 사전</p>
      <p className="text-gray-400 font-medium mt-6 mb-12">
        2021.10.21 ~ 2021.10.30 (1人 개인 프로젝트)
      </p>
      <div className="grid place-items-center">
        <div className="poke-carousel">
          <Slider {...SETTINGS}>
            {pokeImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${image}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-start mt-12">
          포켓몬들의 세부 정보를 확인하고 자유롭게 포켓몬을 잡을 수 있는{" "}
          <strong>첫 리액트 프로젝트</strong>입니다. 잡은 포켓몬들은 나의
          가방에서 확인이 가능합니다. <br />
          <br />
          많은 기능이 있는 프로젝트는 아니지만 Vue.js로만 프론트엔드 개발을
          했었기 때문에 리액트를 처음 접하면서 적응하는데에 시간이 조금
          걸렸습니다. <br />
          <br /> 예를 들면, useState라는 hook을 쓸 때{" "}
          <strong>'setState가 비동기 방식으로 작동한다'</strong>는 이 부분을
          알지 못했었기 때문에 원하는 값을 못 얻고 혼자 고민하다가 개발자
          커뮤니티에서 답을 얻기도 했습니다. <br />
          <br />
          포켓몬을 잡을 때 포켓몬데이터를 저장하기 위해서{" "}
          <strong>Redux를 사용</strong>했습니다. Vuex와 원리는 비슷했기 때문에
          기본 사용법을 검색해서 익힌 후에 바로 사용해보았습니다. Redux는 다양한
          미들웨어가 있기 때문에 앞으로 배울 것이 많을 것 같아 MobX와 고민 끝에
          선택했습니다.
          <strong>React 관련 기술 습득에 초점을 둔 프로젝트</strong>이고 처음
          GitHub pages로 배포까지 해보았습니다.
          <br />
          <br />
          새로운 기술을 혼자 익히고 프로젝트까지 해보는 것이 처음이라서 많은
          어려움이 있었지만 이 포켓몬 프로젝트를 하면서 프론트엔드 개발에 대해
          더 욕심을 가지게 되었습니다. <br />
          <br />
          <hr />
          <br />
          <div className="grid grid-cols-4">
            <div className="col-span-1 flex items-center font-semibold gap-x-2">
              <FcCheckmark size="30" />
              <p>Front-end</p>
            </div>
            <div className="col-span-3 flex items-center">React, Redux</div>
          </div>
          {pokeDesc.map((desc, index) => (
            <div className="grid grid-cols-4" key={index}>
              <div className="col-span-1 flex items-center font-semibold gap-x-2">
                <FcCheckmark size="30" />
                <p>{desc.title}</p>
              </div>
              <div className="col-span-3 underline hover:text-gray-500 flex items-center">
                {desc.content} <a href={desc.url}>바로가기</a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Pokemon;
