import Slider from "react-slick";
import ButtonSlider from "./UI/ButtonSlider";
import useSlider from "../hooks/use-slider";

const Expectations = () => {
  const { settings, slider } = useSlider("variableWidth");

  return (
    <div className="text-center pt-10 pb-20 md:py-16 lg:py-20">
      <h2>Що чекає вас в турі?</h2>
      <div className="mt-5 md:mt-8 lg:mt-10">
        <Slider ref={slider} {...settings}>
          <div className="text-left ml-8 shrink-0">
            <h3>Триразове харчування</h3>
            <img
              src="images/Expectations1.jpg"
              alt="Фото приготування їжі"
              className="w-72 h-60	mt-4 object-cover md:w-400	md:h-72 2xl:w-500 2xl:h-400"
            />
          </div>
          <div className="text-left ml-8 shrink-0">
            <h3>Дегустація вина</h3>
            <img
              src="images/Expectations2.jpg"
              alt="Фото дівчина п'є вино"
              className="w-72 h-60	mt-4 object-cover md:w-400	md:h-72 2xl:w-500 2xl:h-400"
            />
          </div>
          <div className="text-left ml-8 shrink-0">
            <h3>Фотографії подорожі</h3>
            <img
              src="images/Expectations3.jpg"
              alt="Фото дівчина фотографує"
              className="w-72 h-60	mt-4 object-cover md:w-400	md:h-72 2xl:w-500 2xl:h-400"
            />
          </div>
          <div className="text-left ml-8 shrink-0">
            <h3>Проїзд з Києва до Карпат та назад</h3>
            <img
              src="images/Expectations4.jpg"
              alt="Фото компанія в машині"
              className="w-72 h-60	mt-4 object-cover md:w-400	md:h-72 2xl:w-500 2xl:h-400"
            />
          </div>
          <div className="text-left ml-8 shrink-0">
            <h3>Політ на пароплані</h3>
            <img
              src="images/Expectations5.jpg"
              alt="Фото політ на пароплані"
              className="w-72 h-60	mt-4 object-cover md:w-400	md:h-72 2xl:w-500 2xl:h-400"
            />
          </div>
          <div className="text-left ml-8 shrink-0">
            <h3>Повністю все спорядження видається</h3>
            <img
              src="images/Expectations6.jpg"
              alt="Фото палатка"
              className="w-72 h-60	mt-4 object-cover md:w-400	md:h-72 2xl:w-500 2xl:h-400"
            />
          </div>
        </Slider>
        <ButtonSlider slider={slider} />
      </div>
    </div>
  );
};

export default Expectations;
