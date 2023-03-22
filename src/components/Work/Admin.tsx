import Admin1 from "../../images/admin1.png";
import { FcCheckmark } from "react-icons/fc";

const Admin = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-3xl p-8">
      <p className="text-4xl font-semibold">Coinvestor Operation Admin</p>
      <p className="text-gray-400 font-medium mt-6 mb-12">
        2022.06.01~ 2022.10.31
      </p>
      <div className="grid place-items-center">
        <div>
          <img src={Admin1} alt="admin" />
        </div>
        <div className="w-full text-start mt-12 border-t pt-4 grid grid-cols-1 lg:grid-cols-2 gap-x-2">
          <div>
            <div className="flex gap-x-1 font-semibold mb-2">
              <FcCheckmark size="24" />
              <p>프로젝트 소개</p>
            </div>
            <ul className="pl-7 list-disc marker:text-xs text-sm">
              <li className="mb-4">
                <p>
                  사내 직원들이 가상 자산 운용 전문가들에게 페이백을 정산해주고
                  모든 상품에 대한 정보를 확인할 수 있는 Operation Admin
                  사이트입니다. (보안상 로그인 페이지만 캡쳐)
                </p>
              </li>
            </ul>
            <div className="flex gap-x-1 font-semibold mb-2">
              <FcCheckmark size="24" />
              <p>Language / Framework / Library</p>
            </div>
            <ul className="pl-7 list-disc marker:text-xs text-sm">
              <li className="mb-4">
                <p>Typescript, React, Zustand, TailwindCSS</p>
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
                <p>React, Typescript, TailwindCSS를 활용한 UI 개발</p>
              </li>
              <li className="mb-2">
                <p>Payback 정산 로직 개발</p>
              </li>
              <li className="mb-2">
                <p>회원 관리, 권한 관리 기능 개발</p>
              </li>
              <li className="mb-4">
                <p>Zustand를 이용한 상태관리</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Admin;
