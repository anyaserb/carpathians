import SvgPreparation1 from "../svg/SvgPreparation1";
import SvgPreparation2 from "../svg/SvgPreparation2";
import SvgPreparation3 from "../svg/SvgPreparation3";
import ButtonSlider from "./UI/ButtonSlider";
import useSlider from "../hooks/use-slider";
import Slider from "react-slick";

const Preparation = () => {
  const { settings, slider } = useSlider("variableWidth");

  return (
    <div className="py-10 text-center md:py-16 lg:py-20">
      <h2>
        Вже пакуєш речі?
        <br />
        Візьми з собою:
      </h2>
      <ul className="flex flex-col gap-5 mt-5 mx-16 md:mt-8 lg:mt-10">
        <li className="flex flex-col items-center gap-4">
          <SvgPreparation1 />
          <p>Комфортний одяг (не забудь про теплі носочки та кофту)</p>
        </li>
        <li className="flex flex-col items-center gap-4">
          <div>
            <SvgPreparation2 />
          </div>
          <p>Зручне взуття (кросівки або берци)</p>
        </li>
        <li className="flex flex-col items-center gap-4">
          <div>
            <SvgPreparation3 />
          </div>
          <p>Авантюризм та готовність підкорювати вершини</p>
        </li>
      </ul>

      <Slider ref={slider} {...settings}>
        <div className="mt-8 ml-8">
          <img
            src="images/PhotoLibrary.jpg"
            alt="Фото гірського пейзажу"
            className="w-72 h-60 mt-4 object-cover md:mt-32 lg:mt-8 lg:w-500 lg:h-400"
          />
        </div>
        <div className="mt-8 ml-8">
          <img
            src="images/PhotoLibrary2.jpg"
            alt="Фото рюкзака на горі"
            className="w-72 h-60 mt-4 object-cover md:mt-32 lg:mt-8 lg:w-500 lg:h-400"
          />
        </div>
        <div className="mt-8 ml-8">
          <img
            src="images/PhotoLibrary3.jpg"
            alt="Фото чашки на фоні гір"
            className="w-72 h-60 mt-4 object-cover md:mt-32 lg:mt-8 lg:w-500 lg:h-400"
          />
        </div>
        <div className="mt-8 ml-8">
          <img
            src="images/PhotoLibrary4.jpg"
            alt="Фото компанії, яка йде стежкою"
            className="w-72 h-60 mt-4 object-cover md:mt-32 lg:mt-8 lg:w-500 lg:h-400"
          />
        </div>
      </Slider>
      <ButtonSlider slider={slider} />
    </div>
  );
};

export default Preparation;
