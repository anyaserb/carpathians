import SvgPreparation1 from "../svg/SvgPreparation1";
import SvgPreparation2 from "../svg/SvgPreparation2";
import SvgPreparation3 from "../svg/SvgPreparation3";
import styles from "./Preparation.module.css";
import Slider from "react-slick";
import ButtonSlider from "./UI/ButtonSlider";
import useSlider from "../hooks/use-slider";

const Preparation = () => {
  const { settings, slider } = useSlider('variableWidth');

  return (
    <div className={styles.preparationSection}>
      <h2>Вже пакуєш речі? Візьми з собою:</h2>
      <ul className={styles.list}>
        <li>
          <SvgPreparation1 />
          <p>Комфортний одяг (не забудь про теплі носочки та кофту)</p>
        </li>
        <li>
          <div>
            <SvgPreparation2 />
          </div>
          <p>Зручне взуття (кросівки або берци)</p>
        </li>
        <li>
          <div>
            <SvgPreparation3 />
          </div>
          <p>Авантюризм та готовність підкорювати вершини</p>
        </li>
      </ul>

      <Slider ref={slider} {...settings}>
        <div className={styles.imageSlider}>
          <img src="images/PhotoLibrary.jpg" alt="" />
        </div>
        <div className={styles.imageSlider}>
          <img src="images/PhotoLibrary.jpg" alt="" />
        </div>
        <div className={styles.imageSlider}>
          <img src="images/PhotoLibrary.jpg" alt="" />
        </div>
      </Slider>
      <ButtonSlider slider={slider} />
    </div>
  );
};

export default Preparation;
