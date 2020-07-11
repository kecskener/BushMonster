import React, { Component } from 'react';
import axios from 'axios';
import './login.scss';

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            error: ""
        }
    }

    componentDidMount() {
        axios.get("http://localhost:5000/error")
            .then(data => { this.setState({ error: data.data })});
    }

    render() {
        return (
            <div className={"login"}>
                <div className={"login--panel"}>
                    <div className={"login--panel__image"}></div>
                    <form className={"login--panel__form"} action={"http://localhost:5000/makeLogin"} method={"post"}>
                        <input className={"login--panel__form--input"} name={"username"} placeholder={"Username"}></input>
                        <input className={"login--panel__form--input2"} type={"password"} name={"password"} placeholder={"Password"}></input>
                        <button className={"login--panel__form--submit"} type={"submit"}>Login</button>
                        <p className={"login--panel__form--error"}>{this.state.error}</p>
                    </form>
                </div>
            </div>
        )
    }
}

export default Login;
