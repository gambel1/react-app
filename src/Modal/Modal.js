import css from "../Modal/Modal.module.css";

export default function Modal({ active, setActive }) {
  return (
    <>
      {/* <div onClick={() => setActive(false)} className={css.backdrop}> */}
      <div className={active ? css.modal : css.active}>
        <h1 className={css.title}>Как дела?</h1>
      </div>
      {/* </div> */}
    </>
  );
}
