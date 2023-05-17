import "./css/bootstrap.css"
import "./css/styles.css"
import React from "react"
import { Routes, Route } from "react-router-dom"
import Home from "./views/Home"
import Products from "./views/Products"
import ProductDetail from "./views/ProductDetail"
import NotFound from "./views/NotFound"


const App = () => {
  
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Products" element={<Products/>}/>
        <Route path="/Product/:search" element={<ProductDetail/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </>
  );
};

export default App;
