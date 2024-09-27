import React, { useState } from 'react';
import { Button } from '@mui/material';
import Productos from './components/productos'
import Hv from './Hv';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [productName, setProductName] = useState('');
  const [filter, setFilter] = useState('all');

  const addProduct = () => {
    if (productName.trim() === '') return;
    const newProduct = {
      id: Date.now(),
      name: productName, 
      purchased: false,
    };
    setProducts([...products, newProduct]);
    setProductName('');
  };

  const togglePurchased = (productId) => {
    const updatedProducts = products.map(product =>
      product.id === productId
        ? { ...product, purchased: !product.purchased }
        : product
    );
    setProducts(updatedProducts);
  };

  const deleteProduct = (productId) => {
    const updatedProducts = products.filter(product => product.id !== productId);
    setProducts(updatedProducts);
  };

  const handleFilter = (filterType) => {
    setFilter(filterType);
  };

  const filteredProducts = products.filter(product => {
    if (filter === 'purchased') return product.purchased;
    if (filter === 'notPurchased') return !product.purchased;
    return true;
  });

  const purchasedCount = products.filter(product => product.purchased).length;

  return (
    // <div style={{display:'block', marginLeft:'auto', marginRight:'auto'} }>
    //   <h1>Lista de Productos</h1> 

    //   {/* Campo de entrada para agregar un nuevo producto */}
    //   <input
    //     type="text"
    //     value={productName}
    //     onChange={(e) => setProductName(e.target.value)}
    //     placeholder="Nombre del producto"
    //   />
    //   <Button variant="contained" onClick={addProduct}>Agregar Producto</Button>

    //   {/* Botones de filtrado */}
    //   <div>
    //     <Button variant="outlined" onClick={() => handleFilter('all')}>Todos</Button>
    //     <Button variant="outlined" onClick={() => handleFilter('purchased')}>Comprados</Button>
    //     <Button variant="outlined" onClick={() => handleFilter('notPurchased')}>No Comprados</Button>
    //   </div>

    //   {/* Mostrar el número total de productos y cuántos están comprados */}
    //   <p>Total de productos: {products.length}</p>
    //   <p>Productos comprados: {purchasedCount}</p>

    //   {/* Componente ProductTable */}
    //   <Productos
    //     products={filteredProducts}
    //     togglePurchased={togglePurchased}
    //     deleteProduct={deleteProduct}
    //   />
    // </div>

    <Hv />

  );
};

export default ProductList;
