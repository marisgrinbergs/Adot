import React, { useContext } from "react";

import { AppContext } from "../App/App";
import Cards from "../Cards/cards";
import "./modal.css";

import { TextField } from "@mui/material";
import { Switch } from "@mui/material";
import { Button } from "@mui/material";
import { Grid } from "@mui/material";

const Modal = () => {
  const {
    destinationHandler,
    addressHandler,
    urlHandler,
    residentsHandler,
    hotelsHandler,
    avgPayHandler,
    superficyHandler,
    createCardOnSubmit,
    closeModal,
  } = useContext(AppContext);
  return (
    <div className='modal'>
      <form onSubmit={createCardOnSubmit} className='modal-content'>
        <h3>Ajouter une nouvelle destination</h3>
        {/* GRANDE GRID */}
        <Grid container spacing={1} justify-content='space-between'>
          <Grid
            container
            direction='column'
            item
            xs={12}
            spacing={0}
            sx={{ m: 1 }}>
            <TextField
              id='filled-basic'
              label='Nom de la destination'
              variant='filled'
              onChange={(e) => destinationHandler(e)}
            />
          </Grid>
          <Grid
            container
            direction='column'
            item
            xs={12}
            spacing={0}
            sx={{ m: 1 }}>
            <TextField
              id='filled-basic'
              label='Adresse'
              variant='filled'
              onChange={(e) => addressHandler(e)}
            />
          </Grid>
          <Grid
            container
            direction='column'
            item
            xs={12}
            spacing={0}
            sx={{ m: 1 }}>
            <TextField
              id='filled-basic'
              label="Lien de l'image"
              variant='filled'
              onChange={(e) => urlHandler(e)}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id='filled-basic'
              label='Nb Habitants'
              variant='filled'
              onChange={(e) => residentsHandler(e)}
              sx={{ m: 1 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id='filled-basic'
              label='Nb Hôtels'
              variant='filled'
              onChange={(e) => hotelsHandler(e)}
              sx={{ m: 1 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id='filled-basic'
              label='Revenus Moy'
              variant='filled'
              onChange={(e) => avgPayHandler(e)}
              sx={{ m: 1 }}
            />
          </Grid>
          <Grid item xs={3}>
            <TextField
              id='filled-basic'
              label='Superficie'
              variant='filled'
              onChange={(e) => superficyHandler(e)}
              sx={{ m: 1 }}
            />
          </Grid>
          <Grid direction='row' container sx={{ alignItems: "center" }}>
            <Switch />
            <div>Activer</div>
          </Grid>
          <Grid direction='row' container sx={{ justifyContent: "flex-end" }}>
            <Button onClick={closeModal}>Annuler</Button>
            <Button type='submit'>Confirmer</Button>
          </Grid>
        </Grid>
      </form>
    </div>
  );
};

export default Modal;
