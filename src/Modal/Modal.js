import css from "../Modal/Modal.module.css";

export default function Modal({ active, setActive }) {
  return (
    <>
      {/* <div onClick={() => setActive(false)} className={css.backdrop}> */}
      <div className={active ? css.modal : css.active}>
        <h1 className={css.title}>Одевайся</h1>
      </div>
      {/* </div> */}
    </>
  );
}
