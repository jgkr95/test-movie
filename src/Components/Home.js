import React, { Component } from 'react';
import { BrowserRouter , Route, Link } from 'react-router-dom';
import Register from './register';
import Login from './login';
class Home extends Component {
  render() {
    return (
        
        <div>
            <button>Signup
            <Link to = "/register">           register
          </Link>
            </button>
        <button>Login
        <Link to = "/login">            Login
          </Link>
        </button>
        <Route exact path='/register' exact component={Register}/>
        <Route exact path='/login' exact component={Login}/>

        </div>
    );
  }
}


export default Home;