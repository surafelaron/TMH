import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';
import Home from "./pages/home/Home";
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import "./style.css"

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Route path="/register" component={Register}></Route>
        <Route path="/signin" component={Login}></Route>
        <Route path="/" component={Home} exact></Route>
        
      </div>
    </BrowserRouter>

  );
}

export default App;
