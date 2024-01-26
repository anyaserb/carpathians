import SvgAdvantages1 from "../svg/SvgAdvantages1";
import SvgAdvantages2 from "../svg/SvgAdvantages2";
import SvgAdvantages3 from "../svg/SvgAdvantages3";
import SvgAdvantages4 from "../svg/SvgAdvantages4";
import SvgAdvantages5 from "../svg/SvgAdvantages5";
import styles from "./Advantages.module.css";

const Advantages = () => {
  return (
    <div className="text-center py-10	px-8 md:py-16 lg:py-20" id="advantages">
      <h2>Чому ми?</h2>
      <ul className="flex flex-col gap-8 mx-auto my-0">
        <li className="flex flex-row gap-3 items-center">
          <div>
            <SvgAdvantages1 />
          </div>
          <p>
            Немає спорядження? В нас все є! Спальники, каремати, палатки - на
            всіх вистачить.
          </p>
        </li>
        <li className="flex flex-row gap-3 items-center">
          <div>
            <SvgAdvantages2 />
          </div>
          <p>
            Тривалість туру: вихідні. Вам не потрібно просити відпустку чи
            відгули на роботі!
          </p>
        </li>
        <li className="flex flex-row gap-3 items-center">
          <div>
            <SvgAdvantages3 />
          </div>
          <p>
            Вегетеріанці можуть не хвилюватися: щось смачненьке знайдеться для
            кожного.
          </p>
        </li>
        <li className="flex flex-row gap-3 items-center">
          <div>
            <SvgAdvantages4 />
          </div>
          <p>
            Довжина маршруту: ХХ км. Складність: 3/5 (трішки важче, аніж
            крутитися в офісному кріслі).
          </p>
        </li>
        <li className="flex flex-row gap-3 items-center">
          <div>
            <SvgAdvantages5 />
          </div>
          <p>
            Незапланованих витрат не буде. Все вже включено у вартість. Їдьте в
            подорож зі спокійною душею.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Advantages;
