import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import './about.scss';

class About extends Component {
    render() {
        return (
            <div className={"about"}>
                <header className={"about--header"}>
                    <Link to={"/"} className={"about--header__item"}>Home</Link>
                    <Link to={"/about=pixi"} className={"about--header__item"}>About</Link>
                    <Link to={"/login="+localStorage.getItem("route")} className={"about--header__item"}>Login</Link>
                </header>

                <div className={"about--planet"}>
                    <div className={"about--planet__textbox"}>
                        <h1 className={"about--planet__textbox--heading"}>About Pixi7</h1>
                        <h2 className={"about--planet__textbox--description"}>Pixi7 is a planet far from our beloved home earth, but even though its far away one brave men an his crew is not just attempted to get there, they even landed and discovered something new the bushmonster, Captain Broomhead named the creatures bushmonster because he was scared by one of them jumping out of the bush, when they return they bring the bushmonsters with themself.<Link to={"/about=bumster"} className={"about--planet__textbox--description__except"}>Continue reading</Link></h2>
                    </div>
                    <div className={"about--planet__orbit"}></div>

                    <div className={"about--planet__nebula"}></div>

                    <div className={"about--planet__green"}></div>

                    <div className={"about--planet__astro"}></div>                 
                </div>
            </div>
        )
    }
}

export default About;