import React from "react";

export default function CartItem(props) {
    
    const removeFromCart = () => {
        props.removeFromCart(props.index);
    }


    return (
        <div>
            <div className="shop-item">
            Name: {props.name}
            <div className="item-quantity">
                <input type="number" value={props.quantity} readOnly={true}></input>
                <button type="button" onClick={() => removeFromCart()}>Remove from Cart</button>
            </div>
        </div>
        </div>
    )
}