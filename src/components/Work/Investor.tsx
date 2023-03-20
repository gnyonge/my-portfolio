import Slider from "react-slick";
import "../../styles/slick.css";
import "../../styles/slick-theme.css";
import Investor1 from "../../images/investor1.png";
import Investor2 from "../../images/investor2.png";
import Investor3 from "../../images/investor3.png";
import Investor4 from "../../images/investor4.png";
import Investor5 from "../../images/investor5.png";
import { SETTINGS } from ".";
import { FcCheckmark } from "react-icons/fc";

const Investor = () => {
  const InvestorImages = [
    Investor1,
    Investor2,
    Investor3,
    Investor4,
    Investor5,
  ];
  const InvestorDesc = [
    {
      title: "Deployment",
      content: "Coinvestor",
      url: "https://www.coinvestor.co/",
    },
  ];

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-3xl p-8">
      <p className="text-4xl font-semibold">Coinvestor Main Product</p>
      <p className="text-gray-400 font-medium mt-6 mb-12">2022.11.01 ~ 현재</p>
      <div className="grid place-items-center">
        <div className="poke-carousel">
          <Slider {...SETTINGS}>
            {InvestorImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${image}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-start mt-12">
          <p>
            비씨랩스의 <span className="font-semibold">메인 프로덕트</span>이자
            이번에 리뉴얼 후 런칭한{" "}
            <span className="font-semibold">Coinvestor</span>입니다!
            <br />
            <br />
            간단히 Coinvestor에 대해 말씀드리자면,{" "}
            <span className="font-semibold">가상 자산 간접 투자 플랫폼</span>
            입니다.
            <br />
            가상 자산에 직접 투자를 하기에 부담스러운 일반 투자자들이{" "}
            <span className="font-semibold">가상 자산 운용 전문가들</span>이
            만든 상품에 투자를 하면 전문가들이 투자금을 상품내에서 운용을 하고,
            그 결과로 나온 금액을 나눠가질 수 있도록 해주는 중개 플랫폼입니다.
            <br />
            <br />
            Coinvestor에는 총 네개의 사이트가 있습니다.
            <br />위 프로젝트는 네개의 사이트 중에서 일반 투자자들이 가상 자산
            운용 전문가들이 만든 상품들을{" "}
            <span className="font-semibold">구매(투자), 판매(투자 취소)</span>할
            수 있는 메인 사이트입니다.
            <br />
            <br />
            <span className="font-semibold">
              주로 아래 세 페이지를 개발하였습니다.
            </span>
            <br />
            1. Coinvestor의 메인 페이지라고 할 수 있는 Landing
            <br />
            2. 유저가 가지고 있는 가상 자산을 볼 수 있고, 입출금이 가능한 My
            wallet
            <br />
            3. 유저의 정보를 확인, 수정할 수 있고 인증을 통해 level up을 하고
            Trader 신청을 할 수 있는 My account
            <br />
            <br />
            <br />
            예를 들면, useState라는 hook을 쓸 때{" "}
            <span className="font-semibold">
              'setState가 비동기 방식으로 작동한다'
            </span>
            는 이 부분을 알지 못했었기 때문에 원하는 값을 못 얻고 혼자
            고민하다가 개발자 커뮤니티에서 답을 얻기도 했습니다.
            <br />
            <br />
            포켓몬을 잡을 때 포켓몬데이터를 저장하기 위해서{" "}
            <span className="font-semibold">Redux를 사용</span>했습니다. Vuex와
            원리는 비슷했기 때문에 기본 사용법을 검색해서 익힌 후에 바로
            사용해보았습니다. Redux는 다양한 미들웨어가 있기 때문에 앞으로 배울
            것이 많을 것 같아 MobX와 고민 끝에 선택했습니다.
            <br />
            <br />
            <span className="font-semibold">
              React 관련 기술 습득에 초점을 둔 프로젝트
            </span>
            이고 처음 GitHub pages로 배포까지 해보았습니다.
            <br />
            <br />
            새로운 기술을 혼자 익히고 프로젝트까지 해보는 것이 처음이라서 많은
            어려움이 있었지만 이 포켓몬 프로젝트를 하면서 프론트엔드 개발에 대해
            더 욕심을 가지게 되었습니다.
            <br />
            <br />
            <hr />
            <br />
          </p>
          <div className="grid grid-cols-4">
            <div className="col-span-1 flex items-center font-semibold gap-x-2">
              <FcCheckmark size="30" />
              <p>Front-end</p>
            </div>
            <div className="col-span-3 flex items-center">
              React, Recoil, Next.js, TailwindCSS
            </div>
          </div>
          {InvestorDesc.map((desc, index) => (
            <div className="grid grid-cols-4" key={index}>
              <div className="col-span-1 flex items-center font-semibold gap-x-2">
                <FcCheckmark size="30" />
                <p>{desc.title}</p>
              </div>
              <div className="col-span-3 underline hover:text-gray-500 flex items-center">
                <a href={desc.url} target="_blank" rel="noreferrer">
                  {desc.content} 바로가기
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Investor;
