import React from "react";

interface IState {
  dataState: {};
}

const useLocalStorage: React.FC<IState> = (dataState) => {
  localStorage.setItem("datas", JSON.stringify(dataState));
  localStorage.getItem("datas");
  return <div></div>;
};

export default useLocalStorage;
