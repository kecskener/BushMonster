import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './authed.scss';

class Authed extends Component {


    render() {
        return (
            <div className={"authed"}>
                <div className={"authed--panel"}>
                    <h1 className={"authed--panel__heading"}>You are already logged in</h1>
                    <h2 className={"authed--panel__topping"}>Press button to continue to controll panel</h2>
                    <Link className={"authed--panel__button"} to={"/after"}>Continue</Link>
                </div>
            </div>
        )
    }
}

export default Authed;