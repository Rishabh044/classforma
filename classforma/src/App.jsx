import { BrowserRouter, Routes, Route, Outlet, Link  } from "react-router-dom"
import ReactDOM from "react-dom/client";
import {useEffect, useRef, useState} from 'react';
import Renderer from "./Renderer.jsx";
import Layout from "./Layout.jsx";
import Home from "./Home.jsx";
import Page1 from "./Page1.jsx";
import Page2 from "./Page2.jsx";
import Page3 from "./Page3.jsx"
function render (){
  
}

function App() {
   
  return (
    <>
      {/* <div onClick={() => (render)}>Sample document 1.pdf</div>
      <div onClick={() => (render)}>Sample document 2.pdf</div>
      <div onClick={() => (render)}>Sample document 3.pdf</div>  */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="page_1" element={<Page1 />} />
          <Route path="page_2" element={<Page2 />} />
          <Route path="page_3" element={<Page3 />} />
        </Routes>
      </BrowserRouter>
      
    </>
  )
}

export default App