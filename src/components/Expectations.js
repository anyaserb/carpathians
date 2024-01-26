import styles from "./Expectations.module.css";
import Slider from "react-slick";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import ButtonSlider from "./UI/ButtonSlider";
import useSlider from "../hooks/use-slider";

const Expectations = () => {
  const { settings, slider } = useSlider('variableWidth');

  return (
    <div className={styles.expectationsSection}>
      <h2>Що чекає вас в турі?</h2>
      <div className={styles.sliderContainer}>
        <Slider ref={slider} {...settings}>
          <div className={styles.card}>
            <h3>Триразове харчування</h3>
            <img src="images/Expectations1.jpg" alt="" />
          </div>
          <div className={styles.card}>
            <h3>Дегустація вина</h3>
            <img src="images/Expectations2.jpg" alt="" />
          </div>
          <div className={styles.card}>
            <h3>Фотографії подорожі</h3>
            <img src="images/Expectations3.jpg" alt="" />
          </div>
          <div className={styles.card}>
            <h3>Проїзд з Києва до Карпат та назад</h3>
            <img src="images/Expectations4.jpg" alt="" />
          </div>
          <div className={styles.card}>
            <h3>Політ на пароплані</h3>
            <img src="images/Expectations5.jpg" alt="" />
          </div>
          <div className={styles.card}>
            <h3>Повністю все спорядження видається</h3>
            <img src="images/Expectations6.jpg" alt="" />
          </div>
        </Slider>
        <ButtonSlider slider={slider} />
      </div>
    </div>
  );
};

export default Expectations;
