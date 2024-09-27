import { Box, CardContent, Typography, TextField, Divider } from "@mui/material";
import React from "react";

const CardInit = ({ data }) => {
  return (
    <>
      <div>
      <CardContent>
          {/* Usamos el map para recorrer los datos y generar el JSX */}
          {data.map(({ id, nombre, telefono, correo,cargo }) => (
            <div key={id}>
              <Typography variant="h1">{nombre}</Typography>
              <Typography variant="h2">{telefono}</Typography>
              <Typography variant="h3">{correo}</Typography>
              <Typography variant="h4" className="h4">{cargo}</Typography>
            </div>
          ))}
        </CardContent>       
      </div>
    </>
  );
};

export default CardInit;
