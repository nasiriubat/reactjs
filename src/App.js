
import React, { useEffect, useState } from 'react';
import Cart from './component/Cart';
import Product from './component/Product';
import Layout from './component/Layout';
import CartModal from './component/CartModal';

import './App.css'

function App() {

  const [cartItems, setCartItems] = useState([]);
  const [products, setProducts] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [blur, setBlur] = useState('');


  const handleCartClick = () => {
    setIsModalOpen(!isModalOpen);
    setBlur(isModalOpen == false ? 'blur' : '');
    console.log(cartItems);
  };

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, [])

  function addToCart(item) {
    let ifExist = cartItems.find(cartItem => item.id == cartItem.id)
    if (!ifExist) {
      setCartItems([...cartItems, item]);
    }


  }
  function removeFromCart(item) {
    setCartItems(cartItems.filter(function (cartItem) {
      return cartItem.id !== item.id
    }));

  }


  return (
    <Layout title="My App" onCartClick={handleCartClick} cartItems={cartItems}>
      <div className={"main"+" "+blur}>

        <div className='product-list'>
          {products.map((product) =>
            <Product key={product.id} product={product} onAddToCart={addToCart} onRemoveFromCart={removeFromCart} cartItems={cartItems} />
          )}
        </div>
        {isModalOpen && (
            <CartModal items={cartItems} onCartClick={handleCartClick} />
        )}
      </div>
    </Layout>
  );
}


export default App;
