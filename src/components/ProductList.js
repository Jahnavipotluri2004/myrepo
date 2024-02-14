import React, { useState } from 'react';
const ProductList = ({ products }) => {
  const [cart, setCart] = useState([]);
  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product.id}>
            <div>
              <strong>{product.name}</strong> - ${product.price}
            </div>
            <button onClick={() => addToCart(product)}>Add to Cart</button>
            <button onClick={()=>addToCart(product)}>Add to mall</button>
            <button onClick={() => addToCart(product)}>Add to Mart</button>
          </li>
        ))}
      </ul>
      <div>
        <h2>Cart</h2>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <strong>{item.name}</strong> - ${item.price}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ProductList;