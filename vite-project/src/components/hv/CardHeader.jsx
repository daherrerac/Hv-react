import { Box, CardContent, Typography, TextField, Divider } from "@mui/material";
import React from "react";

const CardHeader = ({  data2 }) => {
  console.log(data2);
  return (
    <>
      <Box>
        <h3>
          Descripción
        </h3>
        {
              data2.map(({ descripcion }) => (
                  
                <p style={{textAlign:"center"}}> {descripcion}</p>
                      
              ))
          } 
                
      </Box>
      <Divider />
      
    </>
     // {/* <Box>
      //  <CardContent>
        //  {/* Usamos el map para recorrer los datos y generar el JSX */}
          //{//data.map(({ id, title, value }) => (
            //<div key={id}>
             // <Typography variant="h6">{title}</Typography>
             // <TextField id={id} value={value} variant="outlined" fullWidth disabled style={{background:'white'}} />
            //</></div>
          //))}
        //</CardContent>
      //</Box> */}

      
  );
};

export default CardHeader;
