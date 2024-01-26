import styles from "./Route.module.css";
import Slider from "react-slick";
import SvgRoute from "../svg/SvgRoute";
import ButtonSlider from "./UI/ButtonSlider";
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import SvgRouteMiddle from "../svg/SvgRouteMiddle";
import useSlider from "../hooks/use-slider";

const Router = () => {
  const { settings, slider } = useSlider();

  return (
    <div className={styles.routeSection} id="route">
      <h2>Маршрут</h2>
      <Slider ref={slider} {...settings} className={styles.slider}>
        <div className={styles.cardRoute}>
          <h3>День 1</h3>
          <p>Київ</p>
          <p>
            Вся група зустрічається з гідами в п’ятницю о 20:00 на станції метро
            Житомирська. Беремо з собою гарний настрій та авантюризм! Їдемо
            мікро-автобусом: декілька годин на знайомство, а далі рекомендуємо
            всім гарненько виспатися перед подорожжю.
          </p>
        </div>
        <div className={styles.cardRoute}>
          <h3>День 2</h3>
          <p>с. Подобовець - водоспад Шипіт - гора Гимба - Гора Великий Верх</p>
          <p>
            Зранку прибуваємо в Подобовець. Снідаємо в місцевому кафе. Нам
            відкриється вид на хребет Боржава, яким ми будемо сьогодні йти.
            Відвідаємо водоспад Шипіт і розпочнемо підкорення першої вершини -
            Гимби. Тут ми і політаємо на паропланах. Стежкою виходимо на гору
            Великий Верх. Розбиваємо табір та вечеряємо.
          </p>
        </div>
        <div className={styles.cardRoute}>
          <h3>День 3</h3>
          <p>Гора Темнатик - м. Воловець - Київ</p>
          <p>
            Снідаємо та вирушаємо на гору Темнатик. З Темнатика ароматним
            хвойним лісом спускаємось у Воловець. Дорогою можна робити привали
            на галявинах із ожиною і суницею. Вечеряємо в м. Воловець фірмовими
            українськими стравами та дегустуємо вино. Наситившись та напившись,
            вирушаємо в Київ.
          </p>
        </div>
      </Slider>
      <div className={styles.buttonSlider}>
        <ButtonSlider slider={slider} />
      </div>
      <div className={styles.desktopFlex}>
        <div className={styles.routeDesktopVersion}>
          <div className={styles.cardRoute}>
            <h3>День 1</h3>
            <p>Київ</p>
            <p>
              Вся група зустрічається з гідами в п’ятницю о 20:00 на станції
              метро Житомирська. Беремо з собою гарний настрій та авантюризм!
              Їдемо мікро-автобусом: декілька годин на знайомство, а далі
              рекомендуємо всім гарненько виспатися перед подорожжю.
            </p>
          </div>
          <div className={styles.cardRoute}>
            <h3>День 2</h3>
            <p>
              с. Подобовець - водоспад Шипіт - гора Гимба - Гора Великий Верх
            </p>
            <p>
              Зранку прибуваємо в Подобовець. Снідаємо в місцевому кафе. Нам
              відкриється вид на хребет Боржава, яким ми будемо сьогодні йти.
              Відвідаємо водоспад Шипіт і розпочнемо підкорення першої вершини -
              Гимби. Тут ми і політаємо на паропланах. Стежкою виходимо на гору
              Великий Верх. Розбиваємо табір та вечеряємо.
            </p>
          </div>
          <div className={styles.cardRoute}>
            <h3>День 3</h3>
            <p>Гора Темнатик - м. Воловець - Київ</p>
            <p>
              Снідаємо та вирушаємо на гору Темнатик. З Темнатика ароматним
              хвойним лісом спускаємось у Воловець. Дорогою можна робити привали
              на галявинах із ожиною і суницею. Вечеряємо в м. Воловець
              фірмовими українськими стравами та дегустуємо вино. Наситившись та
              напившись, вирушаємо в Київ.
            </p>
          </div>
        </div>
        <div className={styles.svgArrowSmall}>
          <SvgRoute />
        </div>
        <div className={styles.svgArrowMiddle}>
          <SvgRouteMiddle />
        </div>
      </div>
    </div>
  );
};

export default Router;
