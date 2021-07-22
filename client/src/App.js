import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Link, Route } from 'react-router-dom';

import Home from "./pages/home/Home";
import Register from "./pages/register/Register"
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        {/* <Home /> */}
        <Route path="/register" component={Register}></Route>
        <Route path="/" component={Home} exact></Route>
      </div>
    </BrowserRouter>

  );
}

export default App;
