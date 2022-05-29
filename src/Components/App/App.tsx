import React, { useState, createContext } from "react";
import "./App.css";
import Header from "../Header/header";
import Modal from "../Modal/modal";
import useModal from "./useModal";

interface IState {
  modal?: boolean;
  changedLogging?: Function;
  destination?: string;
  adress?: string;
  url?: string;
  residents?: string;
  hotels?: string;
  avgPay?: string;
  superficy?: string;
}

export const AppContext = createContext<IState | any>({});

const App: React.FC<IState> = () => {
  const [modal, setModal] = useState<boolean>(false);
  const changedLogging: Function = (): void => {
    setModal(!modal);
    console.log("apres set modale", modal);
  };
  const {
    destination,
    address,
    url,
    residents,
    hotels,
    avgPay,
    superficy,
  }: any = useModal();
  return (
    <div className='App'>
      <AppContext.Provider
        value={{
          changedLogging,
          useModal,
        }}>
        <Header />
        {modal && <Modal />}
      </AppContext.Provider>
    </div>
  );
};

export default App;
