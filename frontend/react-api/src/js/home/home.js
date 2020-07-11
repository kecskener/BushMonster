import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import './home.scss';

class Home extends Component {
    render() {
        return (
            <div className={"home"}>
               <header className={"home--header"}>
                   <Link to={"/"} className={"home--header__item"}>Home</Link>
                   <Link to={"/about=pixi"} className={"home--header__item"}>About</Link>
                   <Link to={"/login="+localStorage.getItem("route")} className={"home--header__item"}>Login</Link>
               </header>

               <div className={"home--login"}>
                   <h1 className={"home--login__heading"}>The pets of the future</h1>
                   <h2 className={"home--login__miding"}>Bushmonsters...</h2>               
                   <h3 className={"home--login__ending"}>They came from the space and they pretty much like yaks, but they not everyday creatures they can fly, and they like to eat watermelon, and some of them are pretty rare</h3>
                   <Link to={"/login="+localStorage.getItem("route")} className={"home--login__button"}>Login</Link>
               </div>

               <div className={"home--planet"}></div>


               <footer className={"home--footer"}>
                   <h3>Copyright &copy; Feigl Gergő 2020</h3>
               </footer>
            </div>
        )
    }
}

export default Home;
