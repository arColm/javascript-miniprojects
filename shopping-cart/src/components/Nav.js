import React from "react"
import { Link } from "react-router-dom"

export default function Nav(props) {


    return (
        <nav>
            <div className="Nav_left">
                <Link to="/">Home</Link>
                <Link to="/shop">Shop</Link>
            </div>
            <div className="Nav_right">
                <Link to="/cart">Cart</Link>
            </div>
        </nav>
    )
}