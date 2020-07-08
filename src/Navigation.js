import React, { Component } from "react";
import { Route, NavLink, HashRouter } from "react-router-dom";
import Introduction from "./Intro";
import Counters from "./Counters";
import Colors from "./Colors";
 
class Navigation extends Component {
  render() {
    return (
        <HashRouter>
        <div>
          <h1>React.js Application</h1>
          <ul className="header">
            <li><NavLink exact to="/">Introduction</NavLink></li>
            <li><NavLink to="/counters">Continous Counter</NavLink></li>
            <li><NavLink to="/colors">Random Color</NavLink></li>
          </ul>
          <div className="content">
            <Route exact path="/" component={Introduction}/>
            <Route path="/counters" component={Counters}/>
            <Route path="/colors" component={Colors}/>
          </div>
        </div>
        </HashRouter>
    );
  }
}
 
export default Navigation;