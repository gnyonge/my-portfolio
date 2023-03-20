import Slider from "react-slick";
import "../../styles/slick.css";
import "../../styles/slick-theme.css";
import Hunsu1 from "../../images/메인1.png";
import Hunsu2 from "../../images/실채훈.png";
import Hunsu3 from "../../images/ootd1.png";
import Hunsu4 from "../../images/ootd2.png";
import Hunsu5 from "../../images/뭘입을까1.png";
import Hunsu6 from "../../images/뭘입을까2.png";
import Hunsu7 from "../../images/마이페이지 (1).png";
import { SETTINGS } from ".";
import { FcCheckmark } from "react-icons/fc";

const Hunsu = () => {
  const hunsuImages = [Hunsu1, Hunsu2, Hunsu3, Hunsu4, Hunsu5, Hunsu6, Hunsu7];
  const hunsuDesc = [
    {
      title: "My role",
      content: "UI/UX 디자인, 프론트엔드 (#OOTD 파트, 메인페이지)",
    },
    {
      title: "Front-end",
      content: "Vue.js, Vuex, Vuetify",
    },
    {
      title: "Back-end",
      content: "Spring Boot, Swagger, Stomp",
    },
  ];
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-3xl p-8 pb-16">
      <p className="text-4xl font-semibold">Hunsu (훈수)</p>
      <p className="text-gray-400 font-medium mt-6 mb-12">
        2021.01.06 ~ 2021.02.19 (6人 팀 프로젝트)
      </p>
      <div className="grid grid-cols-2 place-items-center">
        <div className="hunsu-carousel col-span-1">
          <Slider {...SETTINGS}>
            {hunsuImages.map((image, index) => (
              <div key={index}>
                <img src={image} alt={`${image}`} />
              </div>
            ))}
          </Slider>
        </div>
        <div className="text-start h-full">
          <p>
            <span className="font-semibold">
              '패션' 이라는 주제로 소통의 장을 열 수 있는 패션 커뮤니티 사이트
            </span>
            입니다. <br />
            <br />
            주요 기능은 <span className="font-semibold">실시간</span> 채팅방에서
            소통하며 패션 '훈수'를 주고 받을 수 있는 서비스와 오늘 나의 패션을
            자랑하는 <span className="font-semibold">#OOTD</span> (Outfit Of The
            Day) , 그리고 패션에 대한 고민을 해결해줄 투표기능이 있는{" "}
            <span className="font-semibold">뭘 입을까?</span> 가 있습니다.
            <br />
            <br />
            여러 커뮤니티와 쇼핑몰 어플들을 이용하면서 옷에 대한 센스가 부족한
            사람들은 어디서 도움을 받을 수 있을까 생각하다가 만들게 된 'Hunsu'
            입니다. <br />
            <br />
            초반 백엔드와 소통의 어려움을 Figma와 구글시트를 사용해 UI/UX 및 API
            명세를 문서화하여 해결하였습니다. 이를 통해 문서화의 중요성과{" "}
            <span className="font-semibold">백엔드 개발자와 협업하는 방법</span>
            도 배울 수 있었습니다.
            <br />
            <br />
            뿐만 아니라, Vuex를 사용할 때 반복되는 코드를 줄이기 위해 파일을
            따로 생성해서 Import하여 사용하는 등 혼자 공부했을 때는 몰랐던
            여러가지 코드 작성법들을 배울 수 있었습니다.
            <br />
            <br />
            <hr />
            <br />
          </p>
          {hunsuDesc.map((desc, index) => (
            <div className="grid grid-cols-3" key={index}>
              <div className="col-span-1 flex items-center font-semibold gap-x-2">
                <FcCheckmark size="30" />
                <p>{desc.title}</p>
              </div>
              <div className="col-span-2 flex items-center">{desc.content}</div>
            </div>
          ))}
          <div className="grid grid-cols-3">
            <div className="col-span-1 flex items-center font-semibold gap-x-2">
              <FcCheckmark size="30" />
              <p>GitHub</p>
            </div>
            <div className="col-span-2 underline hover:text-gray-500 flex items-center">
              <a
                href="https://github.com/gnyonge/Hunsu"
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

export default Hunsu;
