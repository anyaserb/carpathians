import styles from "./MainScreen.module.css";
import SvgLogo from "../svg/SvgLogo";
import SvgMenu from "../svg/SvgMenu";
import SvgArrow from "../svg/SvgArrow";
import SvgCross from "../svg/SvgCross";
import PopUp from "./UI/PopUp";
import useForm from "../hooks/use-form";

const MainScreen = (props) => {
  const {
    formIsValid,
    nameState,
    phoneState,
    submitForm,
    popUp,
    setPopUp,
    thanksPopUp,
    setThanksPopUp,
    changeInputNameHandler,
    changeInputPhoneHandler
  } = useForm(false);

  const content = (
    <form className={styles.formPopUp} onSubmit={submitForm}>
      <div className={styles.inputContainer}>
        <input
          type="text"
          onChange={changeInputNameHandler}
          value={nameState.value}
        />
        <span
          className={
            nameState.value.trim() !== "" ? styles.focusSpan : styles.label
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
            phoneState.value.trim() !== "" ? styles.focusSpan : styles.label
          }
        >
          +38 (0хх) ххх - хх - хх
        </span>
      </div>
      <button disabled={!formIsValid} type="submit">
        Відправити
      </button>
    </form>
  );

  const confirmPopUpHandler = () => {
    setPopUp(false);
  };

  return (
    <div className={styles.firstScreen} id="main">
      <div className={styles.gradient}>
        <div className={styles.navBox}>
          <SvgLogo className={styles.logo} />
          <div
            className={styles.menu}
            onClick={() => props.setBurgerMenu(true)}
          >
            <SvgMenu />
          </div>
          <ul className={styles.navMenu}>
            <li>
              <a href="#aboutUs">Про нас</a>
            </li>
            <li>
              <a href="#route">Маршрут</a>
            </li>
            <li>
              <a href="#advantages">Чому ми?</a>
            </li>
            <li>
              <a href="#reviews">Відгуки</a>
            </li>
            <li>
              <a href="#formOrder">Замовити</a>
            </li>
            <li>
              <a href="#contacts">Контакти</a>
            </li>
          </ul>
        </div>
        {props.burgerMenu && (
          <div className={styles.burgerMenu}>
            <div
              className={styles.cross}
              onClick={() => props.setBurgerMenu(false)}
            >
              <SvgCross />
            </div>
            <ul className={styles.navMenu}>
              <li>
                <a href="#aboutUs">Про нас</a>
              </li>
              <li>
                <a href="#route">Маршрут</a>
              </li>
              <li>
                <a href="#advantages">Чому ми?</a>
              </li>
              <li>
                <a href="#reviews">Відгуки</a>
              </li>
              <li>
                <a href="#formOrder">Замовити</a>
              </li>
              <li>
                <a href="#contacts">Контакти</a>
              </li>
            </ul>{" "}
          </div>
        )}

        <h1>КАРПАТИ</h1>
        <p className={styles.textContent}>
          З Вас - авантюризм, з нас - все інше. Замовляй тур в гори вже на ці
          вихідні!
        </p>
        <button className={styles.mainButton} onClick={() => setPopUp(true)}>
          Хочу в гори
        </button>
        <div className={styles.squaresBox}>
          <div className={styles.square}>
            <p>5000 гривень</p>
          </div>
          <div className={styles.square}>
            <p>2 дні</p>
          </div>
          <div className={styles.square}>
            <p>5 локацій</p>
          </div>
          <div className={styles.square}>
            <p>Виїзд з міста Київ</p>
          </div>
        </div>
        <div className={styles.arrow}>
          <SvgArrow />
        </div>
      </div>
      {popUp && (
        <PopUp
          onConfirm={confirmPopUpHandler}
          header={"Вйо до пригод!"}
          content={content}
        />
      )}
      {thanksPopUp && (
        <PopUp
          onConfirm={() => setThanksPopUp(false)}
          header={"Дякуємо!"}
          content={
            "Ми зв'яжемося з вами протягом 10 хвилин, щоб дати відповідь на всі хвилюючі запитання. Якщо Ви залишили заявку з 20:00 до 09:00, то ми зв’яжемося з вами після 09:00 ранку."
          }
        />
      )}
    </div>
  );
};

export default MainScreen;
