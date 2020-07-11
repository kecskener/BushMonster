import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './bumster.scss';

class Bumster extends Component {
    render() {
        return (
            <div className={"bumster"}>
                <header className={"bumster--header"}>
                    <Link to={"/"} className={"bumster--header__item"}>Home</Link>
                    <Link to={"/about=pixi"} className={"bumster--header__item"}>About</Link>
                    <Link to={"/login="+localStorage.getItem("route")} className={"bumster--header__item"}>Login</Link>
                </header>

                <div className={"bumster--planet"}>
                    <div className={"bumster--planet__textbox"}>
                        <h1 className={"bumster--planet__textbox--heading"}>About Bushmonsters</h1>
                        <h2 className={"bumster--planet__textbox--description"}><span className={"bumster--planet__textbox--description__except"}>❛❛</span>Bushmonsters are super, they can fly, they like watermelon, they can be easily teached and they breathe fire, also they have some super powers like they can read peoples mind, they can summon a force field to protect themself, and they can move object with their mind, they look like yaks but they are not, they are aliens... <span className={"bumster--planet__textbox--description__except"}>❜❜</span><Link to={'/minigame'} className={"bumster--planet__textbox--description__gift"}>A little gift</Link></h2>
                        <h3 className={"bumster--planet__textbox--book"}>— History is wrong (Gorgio Tsuokalos)</h3>
                    </div>
                    <div className={"bumster--planet__orbit"}></div>           
                </div>
            </div>
        )
    }
}

export default Bumster;