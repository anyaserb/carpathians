import SvgCross from "../../svg/SvgCross";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <div
      className="fixed top-0 left-0 w-full h-screen	z-40 bg-blackTrans60"
      onClick={props.onConfirm}
    ></div>
  );
};

const ModalOverlay = (props) => {
  return (
    <div
      className="fixed top-[20vh] left-1/2 -translate-x-2/4	w-4/5	z-50 overflow-hidden bg-popUp bg-cover bg-bottom	 
    h-[60vh] text-center rounded-lg flex flex-col justify-center gap-2 px-8 max-w-sm md:max-w-lg md:px-12 lg:max-w-xl"
    >
      <div
        className="absolute right-5 top-5 cursor-pointer"
        onClick={props.onConfirm}
      >
        <SvgCross />
      </div>
      <h3 className="text-3xl">{props.header}</h3>
      <div>{props.content}</div>
    </div>
  );
};

const PopUp = (props) => {
  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop onConfirm={props.onConfirm} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay
          header={props.header}
          content={props.content}
          onConfirm={props.onConfirm}
        />,
        document.getElementById("overlay-root")
      )}
    </React.Fragment>
  );
};

export default PopUp;
