import React from 'react';

function Cart({cartItems}) {
  
    return (
        <div>
            <i className="fa-solid fa-cart-shopping"></i> - {cartItems.length}
        </div>
    );
}

export default Cart;
