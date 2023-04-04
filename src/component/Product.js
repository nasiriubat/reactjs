import React from 'react';

function Product(props) {
    let exists = props.cartItems.find((item) => item.id == props.product.id);
    return (
        <div className='product-item'>
            <span className="rating">{props.product.rating.rate} / {props.product.rating.count}</span>
            <div className="item-details">
                <img src={props.product.image} alt="" className="product-image" />
                <p className="price">${props.product.price}</p>
                <h5>{props.product.title}</h5>
                <p className="category">{props.product.category}</p>
                <p>{props.product.description.slice(0, 100)}</p>
            </div> 
            <div className="button">
                {exists ?
                    <button className='removeFromCartBtn' onClick={() => props.onRemoveFromCart(props.product)}>Remove from Cart</button> :
                    <button className='addToCartBtn' onClick={() => props.onAddToCart(props.product)}>Add to Cart</button>
                }
            </div>

        </div>
    );
}

export default Product;
