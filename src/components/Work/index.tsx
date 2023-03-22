import { Fade } from "react-awesome-reveal";
import Admin from "./Admin";
import Investor from "./Investor";
import Terminal from "./Terminal";

export const SETTINGS = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Work = () => {
  return (
    <div className="py-16 bg-orange-100 flex flex-col items-center" id="work">
      <Fade cascade>
        <p className="text-5xl font-semibold text-start mb-16">Work</p>
      </Fade>
      <div className="grid grid-cols-12 gap-x-6">
        <div className="col-start-3 col-span-8 grid gap-y-24">
          <Investor />
          <Admin />
          <Terminal />
        </div>
      </div>
    </div>
  );
};

export default Work;
