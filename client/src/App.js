import React, { useContext, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Home from "./pages/home/Home";
import Register from "./pages/register/Registerr"
import Login from "./pages/login/Loginn"
import "./style.css"
import Topbar from './components/topbar/Topbar';
import Articles from "./pages/articles/Articles"
import Settings from './pages/settings/Settings';
import { Context } from "./actions/Context"
function App() {
  const { user } = useContext(Context)
  return (
    <div className="App">
      <Router>
        <Topbar />
        {/* <Switch>
            <Route path="/register" component={Register}></Route>
            <Route path="/signin" component={Login}></Route>
            <Route path="/" component={Home} exact></Route>
          </Switch> */}
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/register">{user ? <Home /> : <Register />}</Route>
        <Route path="/login">{user ? <Home /> : <Login />}</Route>
        <Route path="/posts">{user ? <Articles /> : <Register />}</Route>
        <Route path="/settings">{user ? <Settings /> : <Register />}</Route>
        <Route path="/post/:postId"></Route>
      </Router>
    </div>
  );
}

export default App;
