import React, { useState } from "react";
import "./App.css";
import Header from "../Header/header";
import Modal from "../Modal/modal";

export interface IState {
  setModal: Function;
  changedLogging: Function;
}

const App: React.FC<IState> = () => {
<<<<<<< HEAD
  console.log("testttt");
=======
  console.log("test");
>>>>>>> a91569accf4d577ccb788c3dd5a793ad26a66f79
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
