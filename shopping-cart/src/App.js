import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";
import Shop from "./pages/Shop";
import Nav from "./components/Nav";


function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
