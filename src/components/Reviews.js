import styles from "./Reviews.module.css";
import Slider from "react-slick";
import ButtonSlider from "./UI/ButtonSlider";
import useSlider from "../hooks/use-slider";

const Reviews = () => {
  const { settings, slider } = useSlider();

  return (
    <div className={styles.reviewsSection} id="reviews">
      <h2>Відгуки</h2>
      <Slider ref={slider} {...settings}>
        <div className={styles.card}>
          <img src="images/Review1.jpg" alt="" />
          <h3>Анна, 22 роки</h3>
          <p>
            Якщо дуже сильно чогось хочете - робіть! Немає компанії, страшно,
            немає грошей, немає знань, досвіду - з нами у вас все вийде. Цього
            літа я пішла в похід разом з гідами Олександрою та Богданом. Вони
            справжні знавці своєї справи. Я - не початківець, але в них багато
            чому навчилася. На додаток отримала цілий фотоальбом приємних
            спогадів. Атмосфера тепла та дружня. Всім рекомендую!
          </p>
        </div>
        <div className={styles.card}>
          <img src="images/Review1.jpg" alt="" />
          <h3>Анна, 22 роки</h3>
          <p>
            Якщо дуже сильно чогось хочете - робіть! Немає компанії, страшно,
            немає грошей, немає знань, досвіду - з нами у вас все вийде. Цього
            літа я пішла в похід разом з гідами Олександрою та Богданом. Вони
            справжні знавці своєї справи. Я - не початківець, але в них багато
            чому навчилася. На додаток отримала цілий фотоальбом приємних
            спогадів. Атмосфера тепла та дружня. Всім рекомендую!
          </p>
        </div>
      </Slider>
      <ButtonSlider slider={slider} />
    </div>
  );
};

export default Reviews;
