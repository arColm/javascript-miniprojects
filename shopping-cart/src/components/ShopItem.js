import React, {useState} from "react";


export default function ShopItem(props) {
    const [quantity,setQuantity] = useState(0);

    const handleChange = e => {
        setQuantity(e.target.value);
    }

    const addToCart = () => {
        const item = {
            name:props.name,
            quantity:quantity
        };
        props.addToCart(item);
    }

    const increaseQuantity = e => {
        setQuantity(quantity+1);
    }
    const decreaseQuantity = e => {
        setQuantity(quantity-1);
    }

    return (
        <div className="shop-item">
            Name: {props.name}
            <div className="item-quantity">
                <button type="button" onClick={(e) => increaseQuantity(e)}>+</button>
                <input type="number" value={quantity} onChange={(e) => handleChange(e)}></input>
                <button type="button" onClick={(e) => decreaseQuantity(e)}>-</button>
                <button type="button" onClick={() => addToCart()}>Add to Cart</button>
            </div>
        </div>
    )
}