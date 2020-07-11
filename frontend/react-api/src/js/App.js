import React, { Component } from 'react';
import Home from './home/home';
import About from './about/about';
import Bumster from './creature/bumster';
import Main from './main/main';
import Login from './login/login';
import Authed from './authed/authed';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './app.scss';
import Minigame from './minigame/minigame';


class App extends Component {

  constructor(){
    super();
    localStorage.setItem("route","noAuth");
  }

  render() {
    return (
      <Router>
        <div className="container">
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/about=pixi"} component={About} />
            <Route exact path={"/about=bumster"} component={Bumster} />
            <Route exact path={"/login=noAuth"} component={Login} />
            <Route exact path={"/login=auth"} component={Authed} />
            <Route exact path={"/after"} component={Main} />
            <Route exact path={"/minigame"} component={Minigame} />
          </Switch>
        </div>
      </Router>
    )
  }
}


export default App;
