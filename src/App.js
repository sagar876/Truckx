import React, { Component } from "react";
import "./App.css";
import UserList from "./components/components/userList";
import {BrowserRouter, Link, Route, Switch } from "react-router-dom";
import AddUser from './components/components/addUser'

class App extends Component {
  render() {
    return (
        <div>
          <BrowserRouter>
          <nav>
            <ul>
              <li><Link to="/addUser"><button>Add User</button></Link></li>
              <li><Link to="/"><button>Home</button></Link></li>
            </ul>
          </nav>
          <Switch>
            <Route path="/addUser"><AddUser /></Route>
            <Route path="/"><UserList /></Route>
          </Switch>
      </BrowserRouter>
        </div>
        
    );
  }
}

export default App;