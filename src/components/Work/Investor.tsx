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
      title: "Link",
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
        <div className="w-full text-start mt-12 border-t pt-4 grid grid-cols-1 lg:grid-cols-2 gap-x-2">
          <div>
            <div className="flex gap-x-1 font-semibold mb-2">
              <FcCheckmark size="24" />
              <p>프로젝트 소개</p>
            </div>
            <ul className="pl-7 list-disc marker:text-xs text-sm">
              <li className="mb-2">
                <p>
                  Coinvestor는 가상 자산에 직접 투자를 하기에 부담스러운 일반
                  투자자들이{" "}
                  <span className="font-semibold">가상 자산 운용 전문가들</span>
                  이 만든 상품에 투자를 하면 전문가들이 투자금을 상품내에서
                  운용을 하고, 그 결과로 나온 금액을 나눠가질 수 있도록 해주는
                  중개 플랫폼입니다.
                </p>
              </li>
              <li className="mb-4">
                <p>
                  해당 프로젝트는 일반 투자자들이 가상 자산 운용 전문가들이 만든
                  상품들을{" "}
                  <span className="font-semibold">
                    구매(투자), 판매(투자 취소){" "}
                  </span>
                  할 수 있는 메인 사이트입니다.
                </p>
              </li>
            </ul>
            <div className="flex gap-x-1 font-semibold mb-2">
              <FcCheckmark size="24" />
              <p>Language / Framework / Library</p>
            </div>
            <ul className="pl-7 list-disc marker:text-xs text-sm">
              <li className="mb-4">
                <p>
                  Typescript, React, React-query, Next.js, Recoil, TailwindCSS,
                  Storybook
                </p>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex gap-x-1 font-semibold mb-2">
              <FcCheckmark size="24" />
              <p>담당 업무</p>
            </div>
            <ul className="pl-7 list-disc marker:text-xs text-sm">
              <li className="mb-2">
                <p>기존 프로젝트 UI/UX 리뉴얼 프론트 개발</p>
              </li>
              <li className="mb-2">
                <p>React, Typescript, TailwindCSS를 활용한 UI 개발</p>
              </li>
              <li className="mb-2">
                <p>로그인, 마이페이지, 가상 자산 지갑 입출금 기능 개발</p>
              </li>
              <li className="mb-2">
                <p>i18n을 이용한 다국어 지원</p>
              </li>
              <li className="mb-4">
                <p>공통 UI 컴포넌트 라이브러리 개발</p>
              </li>
            </ul>
            {InvestorDesc.map((desc, index) => (
              <div key={index}>
                <div className="flex mb-2 font-semibold gap-x-1">
                  <FcCheckmark size="24" />
                  <p>{desc.title}</p>
                </div>
                <div className="underline hover:text-gray-500 flex items-center text-sm ml-7">
                  <a href={desc.url} target="_blank" rel="noreferrer">
                    {desc.content} 바로가기
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Investor;
