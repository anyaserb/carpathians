import styles from "./PopUp.module.css";
import SvgCross from "../../svg/SvgCross";
import React from "react";
import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return <div className={styles.backdrop} onClick={props.onConfirm}></div>;
};

const ModalOverlay = (props) => {
  return (
    <div className={styles.modal}>
      <div className={styles.svg} onClick={props.onConfirm}>
        <SvgCross />
      </div>
      <h3>{props.header}</h3>
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
