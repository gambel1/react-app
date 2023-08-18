import css from "../Header/Header.module.css";

export default function Header({click}) {
 
  return (
    <div>
      <button
        type="button"
        className={css.burgerMenu}
        onClick={click}
      >Нажми на кнопку!</button>
    </div>
  );
}
