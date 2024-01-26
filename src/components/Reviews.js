import Slider from "react-slick";
import ButtonSlider from "./UI/ButtonSlider";
import useSlider from "../hooks/use-slider";

const Reviews = () => {
  const { settings, slider } = useSlider();

  return (
    <div
      className="py-10 px-5 text-center text-white md:py-16 lg:py-20"
      id="reviews"
    >
      <h2>Відгуки</h2>
      <Slider ref={slider} {...settings}>
        <div className="bg-blackTrans40 rounded-md	p-4 text-left mt-5 max-w-sm	md:mt-8 md:max-w-md lg:mt-10">
          <img
            src="images/Review1.jpg"
            alt="Фото Анни"
            className="object-cover rounded-md h-52	w-full mb-2.5"
          />
          <h3 className="font-bold">Анна, 22 роки</h3>
          <p className="block mt-1">
            Якщо дуже сильно чогось хочете - робіть! Немає компанії, страшно,
            немає грошей, немає знань, досвіду - з нами у вас все вийде. Цього
            літа я пішла в похід разом з гідами Олександрою та Богданом. Вони
            справжні знавці своєї справи. Я - не початківець, але в них багато
            чому навчилася. На додаток отримала цілий фотоальбом приємних
            спогадів. Атмосфера тепла та дружня. Всім рекомендую!
          </p>
        </div>
        <div className="bg-blackTrans40 rounded-md	p-4 text-left mt-5 max-w-sm	md:mt-8 md:max-w-md lg:mt-10">
          <img
            src="images/Review2.jpg"
            alt="Фото Владислава"
            className="object-cover rounded-md h-52	w-full mb-2.5"
          />
          <h3 className="font-bold">Владислав, 31 рік</h3>
          <p className="block mt-1">
            Проведення часу в Карпатах з палатками було найкращим відпочинком,
            який зі мною коли-небудь траплявся. Природа вражає своєю красою та
            чистотою, дозволяючи вам повністю забути про міську метушню. Ранок в
            горах вражає чистим повітрям та неймовірними видами, що стають
            справжньою насолодою для очей. Палатку встановити було легко завдяки
            гідам, а розведення вогонь під зоряним небом стало неперевершеною
            вечірньою розвагою. Звуки природи, такі як шум потічку та спів
            пташок, створюють особливу атмосферу, яка робить кожен момент
            неповторним.
          </p>
        </div>
      </Slider>
      <ButtonSlider slider={slider} />
    </div>
  );
};

export default Reviews;
