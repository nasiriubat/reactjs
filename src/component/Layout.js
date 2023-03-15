import React from 'react';
import NavBar from './NavBar';

function Layout(props) {
  return (
    <div>
      <header>
        <NavBar onCartClick={props.onCartClick} cartItems={props.cartItems} />
      </header>
      <main>{props.children}</main>
      <footer>
        <p>&copy; 2023 My Company, Inc.</p>
      </footer>
    </div>
  );
}

export default Layout;
