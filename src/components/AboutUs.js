const AboutUs = () => {
  return (
    <div className="text-center py-10	px-0 md:py-16 lg:py-20" id="aboutUs">
      <h2>Про нас</h2>
      <div class="md:flex flex-row justify-center">
        <img
          className="w-full max-h-96 object-cover mt-5 md:w-3/6 md:mt-8 md:block lg:mt-10"
          src="images/AboutUs.jpg"
          alt="Фотографія команди Авантюрист"
        />
        <p className="block text-left	mt-4 mb-0 mx-8 md:mt-8 md:mr-24	md:w-4/12 lg:mt-10">
          Ми - це “Авантюрист”. Не можемо уявити життя без підйомів :) Живучи в
          Києві, постійно перебуваючи серед людей, машин, пилу, необхідно час
          від часу брати паузи. Ми пропонуємо вам унікальний досвід відпочинку
          думками. Гарантуємо, що повертаючись в Київ, ви вже будете планувати
          наступну поїздку.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
