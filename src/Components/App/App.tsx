import React, { useState, createContext } from "react";
import "./App.css";
import Header from "../Header/header";
import Modal from "../Modal/modal";
import Cards from "../Cards/cards";
import Backdrop from "../Backdrop/backdrop";

import useModal from "./useModal";
import useLocalStorage from "./useLocalStorage";

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
  const [displayCard, setDisplayCard] = useState<boolean>(false);

  const changedLogging: Function = (): void => {
    setModal(!modal);
    console.log("apres set modale", modal);
  };
  const createCardOnSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setDisplayCard(true);
  };
  const closeModal = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setModal(!modal);
  };
  const {
    destination,
    address,
    url,
    residents,
    hotels,
    avgPay,
    superficy,
    destinationHandler,
    addressHandler,
    urlHandler,
    residentsHandler,
    hotelsHandler,
    avgPayHandler,
    superficyHandler,
    dataState,
  }: any = useModal();
  console.log("datastate", dataState);
  useLocalStorage(dataState);
  return (
    <div className='App'>
      <AppContext.Provider
        value={{
          destination,
          address,
          url,
          residents,
          hotels,
          avgPay,
          superficy,
          changedLogging,
          destinationHandler,
          addressHandler,
          urlHandler,
          residentsHandler,
          hotelsHandler,
          avgPayHandler,
          superficyHandler,
          createCardOnSubmit,
          closeModal,
        }}>
        <Header />
        {modal && <Modal />}
        {displayCard && <Cards />}
        {modal && <Backdrop />}
      </AppContext.Provider>
    </div>
  );
};

export default App;
