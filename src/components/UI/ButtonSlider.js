import SvgSliderArrow from "../../svg/SvgSliderArrow";

const ButtonSlider = (props) => {
  return (
    <div className="mx-auto mt-2 w-2/5	flex justify-between z-10 md:mt-4">
      <button
        className="-scale-x-100	y"
        onClick={() => props.slider?.current?.slickPrev()}
      >
        <SvgSliderArrow className="w-6 h-6 md:w-11 md:h-11" />
      </button>
      <button
        onClick={() => props.slider?.current?.slickNext()}
      >
        <SvgSliderArrow className="w-6 h-6 md:w-11 md:h-11" />
      </button>
    </div>
  );
};

export default ButtonSlider;
