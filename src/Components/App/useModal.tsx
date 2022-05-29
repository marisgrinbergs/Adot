import React, { useState } from "react";

interface IState {
  destinationHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  addressHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  urlHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  residentsHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  hotelsHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  avgPayHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;
  superficyHandler: (e: React.ChangeEvent<HTMLInputElement>) => void;

  destination?: string;
  address?: string;
  url?: string;
  residents?: string;
  hotels?: string;
  avgPay?: string;
  superficy?: string;
}

const useModal: React.FC<IState> = (): any => {
  const [destination, setDestination] = useState("");
  const [address, setAddress] = useState("");
  const [url, setUrl] = useState("");
  const [residents, setResidents] = useState("");
  const [hotels, setHotels] = useState("");
  const [avgPay, setAvgPay] = useState("");
  const [superficy, setSuperficy] = useState("");

  const destinationHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setDestination(e.target.value);
  };

  const addressHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setAddress(e.target.value);
  };

  const urlHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setUrl(e.target.value);
  };

  const residentsHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setResidents(e.target.value);
  };

  const hotelsHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setHotels(e.target.value);
  };

  const avgPayHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setAvgPay(e.target.value);
  };

  const superficyHandler = (e: React.ChangeEvent<HTMLInputElement>): void => {
    e.preventDefault();
    setSuperficy(e.target.value);
  };

  return {
    destinationHandler,
    addressHandler,
    urlHandler,
    residentsHandler,
    hotelsHandler,
    avgPayHandler,
    superficyHandler,
    destination,
    address,
    url,
    residents,
    hotels,
    avgPay,
    superficy,
  };
};

export default useModal;
