import styles from "./FormOrder.module.css";
import Reviews from "./Reviews";
import { useState, useEffect } from "react";
import Footer from "./Footer";
import PopUp from "./UI/PopUp";
import useForm from "../hooks/use-form";

const FormOrder = () => {
  const {
    formIsValid,
    nameState,
    phoneState,
    emailState,
    submitForm,
    popUp,
    setPopUp,
    changeInputNameHandler,
    changeInputPhoneHandler,
    changeInputEmailHandler
  } = useForm(true);

  return (
    <>
      <div className={styles.formOrderCommon}>
        <Reviews />
        <div className={styles.formOrder} id="formOrder">
          <div className={styles.formOrderForm}>
            <h2>Хочеш замовити? Залишились питання? </h2>
            <p>
              Залиши свій номер і ми зателефонуємо тобі протягом 10 хвилин (або
              в робочий час).
            </p>
            <form onSubmit={submitForm}>
              <div className={styles.inputContainer}>
                <input
                  type="text"
                  onChange={changeInputNameHandler}
                  value={nameState.value}
                />
                <span
                  className={
                    nameState.value.trim() !== ""
                      ? styles.focusSpan
                      : styles.label
                  }
                >
                  Ім'я
                </span>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="tel"
                  onChange={changeInputPhoneHandler}
                  value={phoneState.value}
                />
                <span
                  className={
                    phoneState.value.trim() !== ""
                      ? styles.focusSpan
                      : styles.label
                  }
                >
                  +38 (0хх) ххх - хх - хх
                </span>
              </div>
              <div className={styles.inputContainer}>
                <input
                  type="email"
                  onChange={changeInputEmailHandler}
                  value={emailState.value}
                />
                <span
                  className={
                    emailState.value.trim() !== ""
                      ? styles.focusSpan
                      : styles.label
                  }
                >
                  Email
                </span>
              </div>
              <button disabled={!formIsValid} type="submit">
                Відправити
              </button>
            </form>
          </div>
        </div>
        {popUp && (
          <PopUp
            onConfirm={() => setPopUp(false)}
            header={"Дякуємо!"}
            content={
              "Ми зв'яжемося з вами протягом 10 хвилин, щоб дати відповідь на всі хвилюючі запитання. Якщо Ви залишили заявку з 20:00 до 09:00, то ми зв’яжемося з вами після 09:00 ранку."
            }
          />
        )}
        <Footer />
      </div>
    </>
  );
};

export default FormOrder;
