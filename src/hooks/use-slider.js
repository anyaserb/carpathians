import { useState, useEffect, useRef } from "react";

const useSlider = (param) => {
  const initialSlide = 0;

  const [hasSetPosition, setHasSetPosition] = useState(false);
  const slider = useRef();

  useEffect(() => {
    if (slider.current && !hasSetPosition) {
      slider.current.slickGoTo(initialSlide);
      setHasSetPosition(true);
    }
  }, [initialSlide, hasSetPosition, slider]);

  const settings = {
    dots: true,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    adaptiveHeight: true,
    rows: 1,
    variableWidth: true,

    customPaging: function (i) {
      return <button></button>;
    },
    dotsClass: "slick-dots slick-thumb"
  };

  if (param === "variableWidth") {
    settings.variableWidth = true;
  } else {
    settings.variableWidth = false;
  }

  return { slider, settings };
};

export default useSlider;
