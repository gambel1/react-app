import Header from "./Header/Header";
import Modal from "./Modal/Modal";
import { useState } from "react";

export default function App() {
  const [modalActive, setModalActive] = useState(true);
  // const toggleModal = setModalActive(!modalActive)

  const handleClick = () => {
    // setModalActive(true)
    setModalActive(!modalActive);
    console.log("toggle modal");
  };

  return (
    <>
      <Header click={handleClick} />

      <Modal active={modalActive} setActive={setModalActive} />
    </>
  );
}
