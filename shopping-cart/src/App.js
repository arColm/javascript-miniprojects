import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Cart from "./pages/Cart";
import Homepage from "./pages/Homepage";


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
