import React, { useEffect, useState } from "react";
import ShopItem from "../components/ShopItem";

export default function Homepage(props) {
    const [items,setItems] = useState([]);

    useEffect(() => {
        //Initialize shop items
        addItem("Item A");
    },[])

    const addItem = (name) => {
        let newItem = {
            name:name,
            quantity:0
        }

        setItems(items => [...items,newItem]);
    }

    const addToCart = item => {
        props.addToCart(item);
    }
    
    return (
        <div className="homepage">
            Homepage
            {items.map(item => {
                return (
                    <ShopItem 
                        name={item.name}
                        addToCart={addToCart}
                        key={item.name}
                    />
                )
            })}
        </div>
    )
}