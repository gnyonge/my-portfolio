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
      <p className="text-xl md:text-4xl font-semibold">
        Coinvestor Trading Terminal
      </p>
      <p className="text-gray-400 text-sm md:text-base font-medium mt-6 mb-12">
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
        <div className="w-full text-start mt-12 border-t pt-4 grid grid-cols-1 lg:grid-cols-2 gap-x-2">
          <div>
            <div className="flex gap-x-1 text-sm md:text-base font-semibold mb-2 items-center">
              <div className="w-6 h-6">
                <FcCheckmark size="24" />
              </div>
              <p>프로젝트 소개</p>
            </div>
            <ul className="pl-7 list-disc marker:text-xs text-xs md:text-sm">
              <li className="mb-4">
                <p>
                  실제 투자 상품을 운용하는 전문 Trader가 가상 자산을 실제로
                  거래할 수 있는 트레이딩 터미널입니다.
                </p>
              </li>
            </ul>
            <div className="flex gap-x-1 text-sm md:text-base font-semibold mb-2">
              <div className="w-6 h-6">
                <FcCheckmark size="24" />
              </div>
              <p>Language / Framework / Library</p>
            </div>
            <ul className="pl-7 list-disc marker:text-xs text-xs md:text-sm">
              <li className="mb-4">
                <p>
                  React, SWR, Redux, React-bootstrap, Trading view(crypto chart)
                </p>
              </li>
            </ul>
          </div>
          <div>
            <div className="flex gap-x-1 text-sm md:text-base font-semibold mb-2 items-center">
              <div className="w-6 h-6">
                <FcCheckmark size="24" />
              </div>
              <p>담당 업무</p>
            </div>
            <ul className="pl-7 list-disc marker:text-xs text-xs md:text-sm">
              <li className="mb-2">
                <p>데스크탑, 태블릿, 모바일 반응형</p>
              </li>
              <li className="mb-2">
                <p>Coin 검색, 정렬 구현</p>
              </li>
              <li className="mb-2">
                <p>Order history pagination 구현</p>
              </li>
              <li className="mb-4">
                <p>유지보수 및 기능 추가</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terminal;
