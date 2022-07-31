import React from "react";
import CartItem from "../components/CartItem";

export default function Cart(props) {

    const removeFromCart = (index) => {
        props.removeFromCart(index);
    }
    
    return (
        <div className="cart">
            Cart
            {props.cart.map((cartItem,index) => {
                return (
                    <CartItem 
                    name={cartItem.name} 
                    quantity={cartItem.quantity} 
                    removeFromCart={() => removeFromCart(index)}/>
                )
            })}
        </div>
    )
}