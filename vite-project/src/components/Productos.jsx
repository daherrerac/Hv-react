import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper, Button } from '@mui/material';

const Productos = ({ products, togglePurchased, deleteProduct }) => {
  return (
    <TableContainer component={Paper}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Nombre del Producto</TableCell>
            <TableCell>Estado</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map(product => (
            <TableRow key={product.id}>
              <TableCell>
                <span >
                  {product.name}
                </span>
              </TableCell>
              <TableCell>
                {product.purchased ? 'Comprado' : 'No Comprado'}
              </TableCell>
              <TableCell>
                <Button variant="contained" onClick={() => togglePurchased(product.id)}>
                  {product.purchased ? 'No Comprado' : 'Comprado'}
                </Button>
                <Button variant="contained" color="error" onClick={() => deleteProduct(product.id)}>
                  Eliminar
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Productos;
