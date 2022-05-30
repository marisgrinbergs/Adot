import React, { useContext } from "react";

import { AppContext } from "../App/App";
import "./backdrop.css";

const Backdrop = () => {
  const { closeModal } = useContext(AppContext);
  return <div onClick={closeModal} className='backdrop'></div>;
};

export default Backdrop;
