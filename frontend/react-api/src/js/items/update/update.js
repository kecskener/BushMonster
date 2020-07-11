import React from 'react';
import './update.scss';

const Update = (props) => {

    return (
        <form className={"popup--inner__content--form"} action={"http://localhost:5000/updateBumster"} method={"post"}>
            <div className={"popup--inner__content--form__right"}>
                <input className={"popup--inner__content--form__right--input"} defaultValue={props.name} name={"name"}></input>
                <input className={"popup--inner__content--form__right--input"} defaultValue={props.age} name={"age"}></input>
                <input className={"popup--inner__content--form__right--input"} defaultValue={props.color} name={"color"}></input>
                <input className={"popup--inner__content--form__right--input"} defaultValue={props.gender} name={"gender"}></input>
            </div>
            <div className={"popup--inner__content--form__left"}>
                <textarea className={"popup--inner__content--form__left--input"} defaultValue={props.description} name={"description"}></textarea>
                <button className={"popup--inner__content--form__left--button"} type={"submit"}>Update</button>
                <input defaultValue={props._id} name={"_id"} style={{display: "none"}}></input>
            </div>
        </form>
    )

}

export default Update;