import styles from "./Guides.module.css";
import Slider from "react-slick";
import SvgInsta from "../svg/SvgInsta";
import ButtonSlider from "./UI/ButtonSlider";
import useSlider from "../hooks/use-slider";

const Guides = () => {
  const { settings, slider } = useSlider();

  return (
    <div className={styles.guidesSection}>
      <h2>Наші гіди</h2>
      <Slider ref={slider} {...settings}>
        <div className={styles.guidesCard}>
          <img src="images/Olexandra.jpg" alt="" />
          <div className={styles.guidesCardHeader}>
            <h3>Олександра</h3>
            <SvgInsta height={25} width={25} />
          </div>
          <p>
            Засновниця “Авантюристу” На першому курсі поїхала на університетські
            змагання з палатками і з того часу нерозлучна зі своїм рюкзаком.
            Пройшло декілька років постійних походів, коли Олександра зрозуміла,
            найкраща робота - це твоє хоббі. Зводила в похід: 108 людей.
          </p>
        </div>
        <div className={styles.guidesCard}>
          <img src="images/Volodymyr.jpg" alt="" />
          <div className={styles.guidesCardHeader}>
            <h3>Володимир</h3>
            <SvgInsta height={25} width={25} />
          </div>
          <p>
            За щасливою випадковістю Володимир потрапив в перший професійний
            похід Олександри, закохався в гори і став одним з гідів. Обожнює
            розводити вогнища, тому в поході ви стовідсотково не замерзнете.
            Зводив в похід: 96 людей.
          </p>
        </div>
        <div className={styles.guidesCard}>
          <img src="images/Bohdan.jpg" alt="" />
          <div className={styles.guidesCardHeader}>
            <h3>Богдан</h3>
            <SvgInsta height={25} width={25} />
          </div>
          <p>
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
