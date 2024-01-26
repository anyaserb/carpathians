import Reviews from "./Reviews";
import Footer from "./Footer";
import PopUp from "./UI/PopUp";
import useForm from "../hooks/use-form";

const FormOrder = () => {
  const {
    formIsValid,
    formData,
    submitForm,
    popUp,
    setPopUp,
    changeInputNameHandler,
    changeInputPhoneHandler,
    changeInputEmailHandler
  } = useForm(true);

  return (
    <>
      <div className="bg-form bg-center	w-full ">
        <Reviews />
        <div className="py-10 px-5 md:py-16 lg:py-20" id="formOrder">
          <div className="py-5 px-3 text-white text-center bg-blackTrans20 rounded-xl	max-w-md mx-auto my-0 md:p-10 md:mt-10 lg:mt-16 md:max-w-lg	lg:max-w-2xl	">
            <h2>Хочеш замовити? Залишились питання? </h2>
            <p className="block my-5">
              Залиши свій номер і ми зателефонуємо тобі протягом 10 хвилин (або
              в робочий час).
            </p>
            <form onSubmit={submitForm}>
              <div className="mb-9 relative">
                <input
                  type="text"
                  onChange={changeInputNameHandler}
                  value={formData.name.value}
                  className="h-12 w-full rounded-xl bg-inherit border border-white text-white pl-3 z-10 relative"
                />
                <span
                  className={
                    formData.name.value.trim() !== ""
                      ? "absolute left-2.5 -translate-y-4	text-xs	text-whiteTrans80 z-10"
                      : "absolute left-2.5 leading-inputLine	text-whiteTrans80 z-0"
                  }
                >
                  Ім'я
                </span>
              </div>
              <div className="mb-9 relative">
                <input
                  type="tel"
                  onChange={changeInputPhoneHandler}
                  value={formData.phone.value}
                  className="h-12 w-full rounded-xl bg-inherit border border-white text-white pl-3 z-10 relative"
                />
                <span
                  className={
                    formData.phone.value.trim() !== ""
                      ? "absolute left-2.5 -translate-y-4	text-xs	text-whiteTrans80 z-10"
                      : "absolute left-2.5 leading-inputLine	text-whiteTrans80 z-0"
                  }
                >
                  +38 (0хх) ххх - хх - хх
                </span>
              </div>
              <div className="mb-9 relative">
                <input
                  type="email"
                  onChange={changeInputEmailHandler}
                  value={formData.email.value}
                  className="h-12 w-full rounded-xl bg-inherit border border-white text-white pl-3 z-10 relative"
                />
                <span
                  className={
                    formData.email.value.trim() !== ""
                      ? "absolute left-2.5 -translate-y-4	text-xs	text-whiteTrans80 z-10"
                      : "absolute left-2.5 leading-inputLine	text-whiteTrans80 z-0"
                  }
                >
                  Email
                </span>
              </div>
              <button
                disabled={!formIsValid}
                type="submit"
                className="w-full h-12 bg-orange text-white cursor-pointer rounded-lg font-bold disabled:bg-disabled disabled:cursor-default"
              >
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
