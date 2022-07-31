import React, { useState } from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Nav from "./components/Nav";


function App() {
  const [cart,setCart] = useState([]);

  const addToCart = (item) => {
    setCart(cart => [...cart,item]);
  }

  const removeFromCart = (index) => {

    const newCart = [].concat(cart);
    newCart.splice(index,1);
    setCart(newCart);
  }

  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage addToCart={addToCart}/>} />
        <Route path="/cart" element={<Cart cart={cart} removeFromCart={removeFromCart}/>} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
