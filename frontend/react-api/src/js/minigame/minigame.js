import React, { Component } from 'react';
import './minigame.scss';
import Popup from '../popups/mainpopup';
import Ming from '../items/ming/ming';
import { Link } from 'react-router-dom';


class Minigame extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfClicks: 888,
            win: false,
            content: {}
        }
    }

    componentDidMount(){
        this.setState({content: <Ming></Ming>});
    }

    goForIt(){
        this.setState({win: !this.state.win});
    }

    addUp() {
        this.setState({ numberOfClicks: this.state.numberOfClicks+1});

        if(this.state.numberOfClicks === 1000){
            this.goForIt();
        }
    }

    delteUp() {
        this.setState({ numberOfClicks: 0 });
    }

    render() {
        return (
            <div className={"minigame"}>
                <h1 className={"minigame__counter"}>{"You have clicked the bushmonster this many times: " + this.state.numberOfClicks}</h1>
                <div className={"minigame__wrapper"}>
                    <div className={"minigame__wrapper--clickable"} onClick={this.addUp.bind(this)}></div>
                    <button className={"minigame__wrapper--reset"} onClick={this.delteUp.bind(this)}>Reset</button>
                    <Link className={"minigame__wrapper--home"} to={"/"}>Go home</Link>
                </div>
                {this.state.win && <Popup exit={this.goForIt.bind(this)}>{this.state.content}</Popup>}
            </div>
        )
    }
}

export default Minigame;