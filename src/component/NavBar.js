import React from 'react'
import Cart from './Cart';

export default function NavBar(props) {
    function toggleMenu() {
        // console.log('clicked');
        var x = document.getElementById("myTopnav");
        if (x.className === "topnav") {
            x.className += " responsive";
        } else {
            x.className = "topnav";
        }
    }
    return (
        <>

            <div className="topnav" id="myTopnav">

                <a href="#home" className="">Logo</a>
                <a onClick={props.onCartClick} className=""><Cart cartItems={props.cartItems}/></a>
                <a className="icon" onClick={toggleMenu}>--</a>


            </div>

        </>
    )
}
