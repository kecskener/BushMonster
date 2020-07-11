import React, { Component } from 'react';
import axios from 'axios';
import Popup from '../popups/mainpopup';
import Monster from '../items/monsters';
import Update from '../items/update/update';
import Add from '../items/add/add';
import Delete from '../items/delete/delete';
import './main.scss';
import { Link } from 'react-router-dom';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bushmonsters: "",
      details: [],
      showPopup: false,
      popupContent: {}
    }
  }

  componentDidMount() {
    axios.get("http://localhost:5000/getDetails")
      .then(data => {
        let array = [];

        for (var k in data.data.express) {
          array[k] = data.data.express[k];
        }

        this.setState({ bushmonsters: array.length });

        this.setState({ details: array });
      });

  }

  showPopup(element, currentMonster) {
    this.setState({ showPopup: !this.state.showPopup });

    if (element === "update") {
      this.setState({ popupContent: <Update _id={currentMonster._id} name={currentMonster.name} age={currentMonster.age} color={currentMonster.color} gender={currentMonster.gender} description={currentMonster.description}></Update> });
    } else if (element === "add") {
      this.setState({ popupContent: <Add></Add> });
    } else if (element === "delete") {
      this.setState({ popupContent: <Delete></Delete> });
    }
  }

  setStatus() {
    localStorage.setItem("route", "auth");
  }

  logOut() {
    localStorage.setItem("route", "noAuth");
  }

  render() {
    return (
      <div className={"main"}>
        <header className={"main--header"}>
          <h1 className={"main--header__counter"}>{"The number of registered bushmonsters: " + this.state.bushmonsters}</h1>
          <Link className={"main--header__out"} to={"/"} onClick={this.logOut}>Log out</Link>
          <span className={"main--header__span"} onClick={this.showPopup.bind(this, "add")}>Add bushmonster</span>
          <span className={"main--header__span"} onClick={this.showPopup.bind(this, "delete")}>Delete bushmonster</span>
          <Link className={"main--header__link"} to={"/"} onClick={this.setStatus}>Go to home</Link>
        </header>
        <div className={"main--list"}>
          <div className={"main--list__item"}>
                <p className={"main--list__item__container--text"}>Name</p>
                <p className={"main--list__item__container--text"}>Age</p>
                <p className={"main--list__item__container--text"}>Color</p>
                <p className={"main--list__item__container--text"}>Gender</p>
                <p className={"main--list__item__container--description"}>Description of bushmonster</p>
          </div>
          {this.state.details.map(element => (
            <div className={"main--list__item"} key={element._id} onClick={this.showPopup.bind(this, "update", element)} >
              <Monster name={element.name} age={element.age} color={element.color} gender={element.gender} description={element.description} />
            </div>
            ))}

        </div>
        {this.state.showPopup && <Popup exit={this.showPopup.bind(this)}>{this.state.popupContent}</Popup>}
      </div>
    )
  }
}


export default Main;