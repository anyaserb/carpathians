import Slider from "react-slick";
import SvgInsta from "../svg/SvgInsta";
import ButtonSlider from "./UI/ButtonSlider";
import useSlider from "../hooks/use-slider";

const Guides = () => {
  const { settings, slider } = useSlider();

  return (
    <div className="py-10	px-8 bg-guides bg-cover text-center w-full md:py-16 lg:py-20">
      <h2 className="text-white">Наші гіди</h2>
      <Slider ref={slider} {...settings}>
        <div className="mt-5 bg-whiteTrans80 p-4 rounded-md text-left max-w-sm md:mt-8 md:max-w-md lg:mt-10">
          <img
            src="images/Olexandra.jpg"
            alt="Фото Олександри"
            className="w-full h-48 rounded-md mb-2 object-cover	"
          />
          <div className="flex flex-row justify-between mb-1.5 ">
            <h3 className="font-bold">Олександра</h3>
            <SvgInsta height={25} width={25} />
          </div>
          <p className="block">
            Засновниця “Авантюристу” На першому курсі поїхала на університетські
            змагання з палатками і з того часу нерозлучна зі своїм рюкзаком.
            Пройшло декілька років постійних походів, коли Олександра зрозуміла,
            найкраща робота - це твоє хоббі. Зводила в похід: 108 людей.
          </p>
        </div>
        <div className="mt-5 bg-whiteTrans80 p-4 rounded-md text-left max-w-sm md:mt-8 md:max-w-md lg:mt-10">
          <img
            src="images/Volodymyr.jpg"
            alt="Фото Володимира"
            className="w-full h-48 rounded-md mb-2 object-cover	"
          />
          <div className="flex flex-row justify-between mb-1.5">
            <h3 className="font-bold">Володимир</h3>
            <SvgInsta height={25} width={25} />
          </div>
          <p className="block">
            За щасливою випадковістю Володимир потрапив в перший професійний
            похід Олександри, закохався в гори і став одним з гідів. Обожнює
            розводити вогнища, тому в поході ви стовідсотково не замерзнете.
            Зводив в похід: 96 людей.
          </p>
        </div>
        <div className="mt-5 bg-whiteTrans80 p-4 rounded-md text-left max-w-sm md:mt-8 md:max-w-md lg:mt-10">
          <img
            src="images/Bohdan.jpg"
            alt="Фото Богдана"
            className="w-full h-48 rounded-md mb-2 object-cover	"
          />
          <div className="flex flex-row justify-between mb-1.5">
            <h3 className="font-bold">Богдан</h3>
            <SvgInsta height={25} width={25} />
          </div>
          <p className="block">
            Професійний фотограф, якого так не вистачало в команді. Завдяки
            Богдану незабутні враження ще довго залишатимуться з вами в вигляді
            фотокарток. І це ще ви не куштували його фірмовий похідний бульйон!
            Зводив в похід: 58 людей.
          </p>
        </div>
      </Slider>
      <ButtonSlider slider={slider} />
    </div>
  );
};

export default Guides;
