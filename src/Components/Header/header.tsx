import React from "react";

import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

import "./header.css";

const Header = () => {
  return (
    <div className='Header'>
      <Stack
        direction='row'
        justifyContent='space-between'
        alignItems='baseline'>
        <div className='Header-Title'>Destinations</div>
        <Button
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
