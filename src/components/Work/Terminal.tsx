import Slider from "react-slick";
import "../../styles/slick.css";
import "../../styles/slick-theme.css";
import Terminal1 from "../../images/terminal1.png";
import Terminal2 from "../../images/terminal2.png";
import Terminal3 from "../../images/terminal3.png";
import { SETTINGS } from ".";
import { FcCheckmark } from "react-icons/fc";

const Terminal = () => {
  const TerminalImages = [Terminal1, Terminal2, Terminal3];

  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-3xl p-8">
      <p className="text-4xl font-semibold">Coinvestor Trading Terminal</p>
      <p className="text-gray-400 font-medium mt-6 mb-12">
        2022.02.23 ~ 2022.05.31
      </p>
      <div className="grid place-items-center">
        <div className="poke-carousel">
          <Slider {...SETTINGS}>
            {TerminalImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${image}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="w-full text-start mt-12 border-t pt-4 grid grid-cols-2 gap-x-2">
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
                  해당 사이트는 일반 투자자들이 가상 자산 운용 전문가들이 만든
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
                <p>React, ES6, TailwindCSS를 활용한 UI 개발</p>
              </li>
              <li className="mb-2">
                <p>Recoil를 이용한 상태관리</p>
              </li>
              <li className="mb-4">
                <p>공통 UI 컴포넌트 라이브러리 개발</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
