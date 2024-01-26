import SvgLogo from "../svg/SvgLogo";
import SvgLogoBig from "../svg/SvgLogoBig";
import SvgInsta from "../svg/SvgInsta";
import SvgTelegram from "../svg/SvgTelegram";

const Footer = () => {
  return (
    <div className="bg-blackTrans40 p-8" id="contacts">
      <div className="flex flex-row justify-between text-white max-w-md	my-0 mx-auto md:max-w-fit	md:justify-around	md:gap-16 lg:gap-28">
        <div className="hidden md:block">
          <a href="#main">
            <SvgLogoBig />
          </a>
        </div>
        <div className="flex flex-col items-start gap-8">
          <a href="#main" className="md:hidden">
            <SvgLogo className="w-28 h-9 " />
          </a>
          <div className="flex flex-col gap-5">
            <div>Контакти</div>
            <div>avanturist@gmail.com</div>
            <div>+380974231838</div>
            <div>
              <a
                href="https://www.instagram.com/"
                target="_blank"
                className="mr-5"
              >
                <SvgInsta height={35} width={35} />
              </a>
              <a
                href="https://web.telegram.org/"
                target="_blank"
                className="mr-5"
              >
                <SvgTelegram />
              </a>
            </div>
          </div>
        </div>
        <div>
          <ul className="flex flex-col items-start gap-8 md:flex-wrap	md:h-40 lg:h-48	">
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
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
