import React from "react";
import logo from "./logo.svg";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Login from "./Components/login";
import { BrowserRouter, Route, Link } from "react-router-dom";
import Register from "./Components/register";
import Movies from "./Components/Movies";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Route exact path="/" exact component={Home} /> */}
        {/* <Route exact path="/" exact component={Content}/> */}
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route path="/movies" component={Movies} />
      </BrowserRouter>
    </div>
  );
}

export default App;
