import React, { useState } from "react";
import "./App.css";
import Header from "../Header/header";
import Modal from "../Modal/modal";

const App = () => {

  const [modal, setModal] = useState<boolean>(false);
  const changedLogging = (): void => {
    setModal(!modal);
  };
  return (
    <div className='App'>
      <Header setModal={changedLogging} />
      <Modal />
    </div>
  );
};

export default App;
