import React, { useDebugValue, useContext } from "react";

import { AppContext } from "../App/App";

import { TextField } from "@mui/material";
import { Switch } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";

const Modal = () => {
  const { useModal } = useContext(AppContext);
  const { destination } = useModal;
  useDebugValue(useModal);
  return (
    <div>
      <form>
        <h3>Ajouter une nouvelle destination</h3>
        {/* GRANDE GRID */}
        <Grid container spacing={3} justify-content='space-between'>
          <Grid container direction='column' item xs={12} spacing={0}>
            <TextField
              id='filled-basic'
              label='Nom de la destination'
              variant='filled'
            />
          </Grid>
          <Grid container direction='column' item xs={12} spacing={0}>
            <TextField id='filled-basic' label='Adresse' variant='filled' />
          </Grid>
          <Grid container direction='column' item xs={12} spacing={0}>
            <TextField
              id='filled-basic'
              label="Lien de l'image"
              variant='filled'
            />
          </Grid>
          <Grid direction='row' item xs={3}>
            <TextField
              id='filled-basic'
              label='Nb Habitants'
              variant='filled'
            />
          </Grid>
          <Grid item xs={3}>
            <TextField id='filled-basic' label='Nb Hôtels' variant='filled' />
          </Grid>
          <Grid item xs={3}>
            <TextField id='filled-basic' label='Revenus Moy' variant='filled' />
          </Grid>
          <Grid item xs={3}>
            <TextField id='filled-basic' label='Superficie' variant='filled' />
          </Grid>
          <Switch />
          <Button></Button>
          <Button></Button>
        </Grid>
      </form>
    </div>
  );
};

export default Modal;
