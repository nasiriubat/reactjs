import React from 'react';

function Product(props) {

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
                <button className='addToCartBtn' onClick={()=>props.onAddToCart(props.product.id)}>Add to Cart</button>
                <button className='removeFromCartBtn' onClick={()=>props.onRemoveFromCart(props.product.id)}>Remove from Cart</button>
            </div>

        </div>
    );
}

export default Product;
