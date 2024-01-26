import styles from "./ButtonSlider.module.css";
import SvgSliderArrow from "../../svg/SvgSliderArrow";

const ButtonSlider = (props) => {
  return (
    <div className={styles.buttonContainer}>
      <button
        className={styles.buttonPrev}
        onClick={() => props.slider?.current?.slickPrev()}
      >
        <SvgSliderArrow className={styles.sliderArrow} />
      </button>
      <button
        className={styles.buttonNext}
        onClick={() => props.slider?.current?.slickNext()}
      >
        <SvgSliderArrow className={styles.sliderArrow} />
      </button>
    </div>
  );
};

export default ButtonSlider;
