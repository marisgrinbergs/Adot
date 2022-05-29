import React, { useContext } from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { AppContext } from "../App/App";

import "./header.css";

const Header = () => {
  const { changedLogging } = useContext(AppContext);
  return (
    <div className='Header'>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='baseline'>
        <div className='Header-Title'>Destinations</div>
        <Button
          onClick={() => changedLogging()}
          variant='contained'
          style={{
            backgroundColor: "#48f294",
          }}>
          + AJOUTER
        </Button>
      </Stack>
    </div>
  );
};

export default Header;
