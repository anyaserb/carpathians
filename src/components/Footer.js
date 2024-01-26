import SvgLogo from "../svg/SvgLogo";
import SvgLogoBig from "../svg/SvgLogoBig";
import SvgInsta from "../svg/SvgInsta";
import SvgTelegram from "../svg/SvgTelegram";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer} id="contacts">
      <div className={styles.footerContent}>
        <div className={styles.zeroColumn}>
          <a href="#main" className={styles.svglogobig}>
            <SvgLogoBig />
          </a>
        </div>
        <div className={styles.firstColumn}>
          <a href="#main" className={styles.svglogo}>
            <SvgLogo width={110} height={36} />
          </a>
          <div className={styles.contacts}>
            <p>Контакти</p>
            <p>avanturist@gmail.com</p>
            <p>+380974231838</p>
            <div className={styles.icons}>
              <a href="https://www.instagram.com/" target="_blank">
                <SvgInsta height={35} width={35} />
              </a>
              <a href="https://web.telegram.org/" target="_blank">
                <SvgTelegram />
              </a>
            </div>
          </div>
        </div>
        <div className={styles.secondColumn}>
          <ul>
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
