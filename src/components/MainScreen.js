import SvgLogo from "../svg/SvgLogo";
import SvgMenu from "../svg/SvgMenu";
import SvgArrow from "../svg/SvgArrow";
import SvgCross from "../svg/SvgCross";
import PopUp from "./UI/PopUp";
import useForm from "../hooks/use-form";

const MainScreen = (props) => {
  const {
    formIsValid,
    formData,
    submitForm,
    popUp,
    setPopUp,
    thanksPopUp,
    setThanksPopUp,
    changeInputNameHandler,
    changeInputPhoneHandler
  } = useForm(false);

  const content = (
    <form className="w-full flex flex-col gap-8 mt-5" onSubmit={submitForm}>
      <div className="relative">
        <input
          type="text"
          onChange={changeInputNameHandler}
          value={formData.name.value}
          className="bg-inherit border border-black rounded-xl h-11	w-full pl-3 relative z-10 2xl:h-14"
        />
        <span
          className={
            formData.name.value.trim() !== ""
              ? "absolute left-2.5  -translate-y-4	text-xs text-blackTrans60 z-10"
              : "absolute left-2.5 leading-popUp text-blackTrans60 z-0 2xl:leading-[56px]"
          }
        >
          Ім'я
        </span>
      </div>
      <div className="relative">
        <input
          type="tel"
          onChange={changeInputPhoneHandler}
          value={formData.phone.value}
          className="bg-inherit border border-black rounded-xl h-11	w-full pl-3 relative z-10 2xl:h-14 "
        />
        <span
          className={
            formData.phone.value.trim() !== ""
              ? "absolute left-2.5  -translate-y-4	text-xs text-blackTrans60 z-10"
              : "absolute left-2.5 leading-popUp text-blackTrans60 z-0 2xl:leading-[56px]"
          }
        >
          +38 (0хх) ххх - хх - хх
        </span>
      </div>
      <button
        disabled={!formIsValid}
        type="submit"
        className="w-full h-11 bg-orange text-white cursor-pointer rounded-lg	font-bold 2xl:h-14 disabled:bg-disabled disabled:cursor-default"
      >
        Відправити
      </button>
    </form>
  );

  const confirmPopUpHandler = () => {
    setPopUp(false);
  };

  return (
    <div
      className="w-full min-h-screen	text-center bg-mainScreen bg-cover bg-[left_80%_bottom_50%]"
      id="main"
    >
      <div className="bg-gradient-to-b from-transparent	to-blackTrans60 w-full h-full flex flex-col justify-end absolute bottom-0	md:bg-blackTrans20">
        <div className="h-16 w-full bg-blackTrans20 flex justify-between items-center fixed top-0 z-30 md:bg-transparent md:w-[calc(100%-200px)] md:absolute md:max-w-6xl md:left-2/4	md:-translate-x-2/4 md:mt-3">
          <a href="#main">
            <SvgLogo className="cursor-pointer w-32	h-7 mx-8 md:mx-0 md:w-44 md:h-11	" />
          </a>
          <div
            className="cursor-pointer mx-8 lg:hidden"
            onClick={() => props.setBurgerMenu(true)}
          >
            <SvgMenu />
          </div>
          <ul className="hidden  lg:mx-6 lg:text-white lg:flex lg:flex-row lg:justify-end lg:gap-8 ">
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
          <div className="w-full h-52	bg-white fixed top-0 flex items-center shadow z-50 md:right-0 md:h-[70%] md:mx-0 md:w-72 md:flex">
            <div
              className="cursor-pointer absolute top-8 right-8 md:right-24 "
              onClick={() => props.setBurgerMenu(false)}
            >
              <SvgCross />
            </div>
            <ul className="grid w-[calc(100%-60px)] grid-cols-3 gap-y-4 mx-8 md:grid-cols-1">
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
        )}

        <h1 className="text-white font-serif text-6xl md:text-8xl	 2xl:text-9xl">
          КАРПАТИ
        </h1>
        <p className="text-white block w-72	mt-1 mb-6 mx-auto md:w-400	">
          З Вас - авантюризм, з нас - все інше. Замовляй тур в гори вже на ці
          вихідні!
        </p>
        <button
          className="w-[calc(100%-64px)] mx-8 h-1/12 bg-orange text-white cursor-pointer rounded-lg	font-bold md:w-96	md:h-[10%] md:mx-auto md:mb-[5%] md:max-h-16 lg:w-96	"
          onClick={() => setPopUp(true)}
        >
          Хочу в гори
        </button>
        <div className="grid grid-cols-2 my-2.5 mx-8 h-1/6 tex-center gap-2.5 md:grid-cols-4 md:h-[10%] md:w-[calc(100%-200px)] md:max-w-6xl md:mx-auto">
          <div className="w-full h-full bg-whiteTrans15 flex items-center justify-center rounded-lg px-2.5 text-white">
            <p>5000 гривень</p>
          </div>
          <div className="w-full h-full bg-whiteTrans15 flex items-center justify-center rounded-lg px-2.5 text-white">
            <p>2 дні</p>
          </div>
          <div className="w-full h-full bg-whiteTrans15 flex items-center justify-center rounded-lg px-2.5 text-white">
            <p>5 локацій</p>
          </div>
          <div className="w-full h-full bg-whiteTrans15 flex items-center justify-center rounded-lg px-2.5 text-white">
            <p>Виїзд з міста Київ</p>
          </div>
        </div>
        <div className="py-4 mx-auto md:py-1">
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
