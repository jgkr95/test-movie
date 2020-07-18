import React from 'react';
import logo from './logo.svg';
import './App.css';
import Login from './Components/login';
import { BrowserRouter , Route, Link } from 'react-router-dom';
import Register from './Components/register';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Route exact path="/" exact component={Home}/>
      {/* <Route exact path="/" exact component={Content}/> */}
      <Route exact path='/register' exact component={Register}/>
      <Route exact path='/login' exact component={Login}/>


      </BrowserRouter>
    </div>
  );
}

export default App;
