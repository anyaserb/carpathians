import Slider from "react-slick";
import SvgRoute from "../svg/SvgRoute";
import ButtonSlider from "./UI/ButtonSlider";
import SvgRouteMiddle from "../svg/SvgRouteMiddle";
import useSlider from "../hooks/use-slider";

const Router = () => {
  const { settings, slider } = useSlider();

  return (
    <div
      className="py-10 px-8 bg-route bg-cover bg-center text-center w-full text-white md:py-16 md:px-0 md:relative lg:py-20"
      id="route"
    >
      <h2>Маршрут</h2>
      <div className="md:hidden">
        <Slider ref={slider} {...settings}>
          <div className="bg-blackTrans10 mt-5 rounded-md	p-2.5	text-left">
            <h3>День 1</h3>
            <p className="block">Київ</p>
            <p className="block">
              Вся група зустрічається з гідами в п’ятницю о 20:00 на станції
              метро Житомирська. Беремо з собою гарний настрій та авантюризм!
              Їдемо мікро-автобусом: декілька годин на знайомство, а далі
              рекомендуємо всім гарненько виспатися перед подорожжю.
            </p>
          </div>
          <div className="bg-blackTrans10 mt-5 rounded-md	p-2.5	text-left">
            <h3>День 2</h3>
            <p className="block">
              с. Подобовець - водоспад Шипіт - гора Гимба - Гора Великий Верх
            </p>
            <p className="block">
              Зранку прибуваємо в Подобовець. Снідаємо в місцевому кафе. Нам
              відкриється вид на хребет Боржава, яким ми будемо сьогодні йти.
              Відвідаємо водоспад Шипіт і розпочнемо підкорення першої вершини -
              Гимби. Тут ми і політаємо на паропланах. Стежкою виходимо на гору
              Великий Верх. Розбиваємо табір та вечеряємо.
            </p>
          </div>
          <div className="bg-blackTrans10 mt-5 rounded-md	p-2.5	text-left">
            <h3>День 3</h3>
            <p className="block">Гора Темнатик - м. Воловець - Київ</p>
            <p className="block">
              Снідаємо та вирушаємо на гору Темнатик. З Темнатика ароматним
              хвойним лісом спускаємось у Воловець. Дорогою можна робити привали
              на галявинах із ожиною і суницею. Вечеряємо в м. Воловець
              фірмовими українськими стравами та дегустуємо вино. Наситившись та
              напившись, вирушаємо в Київ.
            </p>
          </div>
        </Slider>
      </div>
      <div className="md:hidden">
        <ButtonSlider slider={slider} />
      </div>
      <div className="md:flex md:flex-row md:gap-24 md:mt-8 md:mx-auto md:justify-center lg:gap-48 lg:mt-10 2xl:gap-72 ">
        <div className="hidden md:flex md:flex-col md:w-96 md:bg-blackTrans10 md:p-7">
          <div className="text-left py-2">
            <h3>День 1</h3>
            <div>Київ</div>
            <div>
              Вся група зустрічається з гідами в п’ятницю о 20:00 на станції
              метро Житомирська. Беремо з собою гарний настрій та авантюризм!
              Їдемо мікро-автобусом: декілька годин на знайомство, а далі
              рекомендуємо всім гарненько виспатися перед подорожжю.
            </div>
          </div>
          <div className="text-left py-2">
            <h3>День 2</h3>
            <div>
              с. Подобовець - водоспад Шипіт - гора Гимба - Гора Великий Верх
            </div>
            <div>
              Зранку прибуваємо в Подобовець. Снідаємо в місцевому кафе. Нам
              відкриється вид на хребет Боржава, яким ми будемо сьогодні йти.
              Відвідаємо водоспад Шипіт і розпочнемо підкорення першої вершини -
              Гимби. Тут ми і політаємо на паропланах. Стежкою виходимо на гору
              Великий Верх. Розбиваємо табір та вечеряємо.
            </div>
          </div>
          <div className="text-left py-2">
            <h3>День 3</h3>
            <div>Гора Темнатик - м. Воловець - Київ</div>
            <div>
              Снідаємо та вирушаємо на гору Темнатик. З Темнатика ароматним
              хвойним лісом спускаємось у Воловець. Дорогою можна робити привали
              на галявинах із ожиною і суницею. Вечеряємо в м. Воловець
              фірмовими українськими стравами та дегустуємо вино. Наситившись та
              напившись, вирушаємо в Київ.
            </div>
          </div>
        </div>
        <div className="pt-10 md:hidden">
          <SvgRoute />
        </div>
        <div className="hidden md:block">
          <SvgRouteMiddle />
        </div>
      </div>
    </div>
  );
};

export default Router;
