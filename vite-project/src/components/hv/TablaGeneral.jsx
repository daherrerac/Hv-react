import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableRow, TableContainer, Paper} from '@mui/material';

const TablaGeneral = ({ data, data2 }) => {
  return (
    

    <TableContainer component={Paper}>
    <Table>
    <TableHead>
        <TableRow>
        
        <TableCell className='destacado'>Empresa </TableCell>
        <TableCell className='destacado'>Experiencia </TableCell>      
                
        </TableRow>
    </TableHead>
    <TableBody>
        {data.map(data => (
        <TableRow key={data.id}>
            <TableCell>
            <span className='nombreEmpresa'>
                {data.empresa}
            </span>
            </TableCell>
            <TableCell>
            {data.descripcion}
            </TableCell>
            
        </TableRow>
        ))}
        <h4 className='intermedio'>Habilidades</h4>
        {data2.map(data2 => (
        <TableRow key={data2.id}>
            <TableCell>
            <span className='nombreEmpresa'>
                {data2.campo}
            </span>
            </TableCell>
            <TableCell className='conFondo'>
            {data2.descripcion}
            </TableCell>
            
        </TableRow>
        ))}
    </TableBody>
    </Table>
    </TableContainer>
    
  );
};

export default TablaGeneral;
