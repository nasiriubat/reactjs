import React from 'react'

export default function CartModal(props) {
    return (
        <div>
            <div className="modal">
                <button onClick={() => props.onCartClick(false)} className="modal-close-btn"><i className="fa-solid fa-xmark"></i></button>
                <div className="cart-modal-list">
                    {props.items.map((item) =>
                        <div key={item.id} className="cart-modal-item">
                            <h4>{item.title}</h4>
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}
