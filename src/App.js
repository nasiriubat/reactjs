
import React, { useEffect, useState } from 'react';
import Cart from './component/Cart';
import Product from './component/Product';
import Layout from './component/Layout';

import './App.css'

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleCartClick = () => {

    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  function addToCart(id) {
    let ifExist = cartItems.find(itemId => id == itemId)
    if (!ifExist) {
      setCartItems([...cartItems, id]);
    }


  }
  function removeFromCart(id) {
    setCartItems(cartItems.filter(function (item) {
      return item !== id
    }));

  }


  return (
    <Layout title="My App" onCartClick={handleCartClick} cartItems={cartItems}>
      <div className="main">

        <div className='product-list'>
          {products.map((product) =>
            <Product key={product.id} product={product} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} />
          )}
        </div>
        {isModalOpen && (
          <div className="modal-container">
            <div className="modal">
              <button onClick={() => setIsModalOpen(false)}>Close Modal</button>
              <p>Modal content goes here</p>
            </div>
          </div>
        )}
      </div>
    </Layout>
  );
}


export default App;
