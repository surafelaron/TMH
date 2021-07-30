import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route, Switch } from 'react-router-dom';
import Home from "./pages/home/Home";
import Register from "./pages/register/Register"
import Login from "./pages/login/Login"
import "./style.css"
import Topbar from './components/topbar/Topbar';

function App() {
  return (
    <div className="App">
      <Topbar />
      <BrowserRouter>
        
          <Switch>
            <Route path="/register" component={Register}></Route>
            <Route path="/signin" component={Login}></Route>
            <Route path="/" component={Home} exact></Route>
          </Switch>
        
      </BrowserRouter>
      </div>
  );
}

export default App;
