import React from 'react';

const Add = (props) => {

    return (
        <form className={"popup--inner__content--form"} action={"http://localhost:5000/registerBumster"} method={"post"}>
            <div className={"popup--inner__content--form__right"}>
                <input className={"popup--inner__content--form__right--input"} placeholder={"name"} name={"name"}></input>
                <input className={"popup--inner__content--form__right--input"} placeholder={"age"} name={"age"}></input>
                <input className={"popup--inner__content--form__right--input"} placeholder={"color"} name={"color"}></input>
                <input className={"popup--inner__content--form__right--input"} placeholder={"gender"} name={"gender"}></input>
            </div>
            <div className={"popup--inner__content--form__left"}>
                <textarea className={"popup--inner__content--form__left--input"} placeholder={"description"} name={"description"}></textarea>
                <button className={"popup--inner__content--form__left--button"} type={"submit"}>Add</button>
            </div>
        </form>
    )

}

export default Add;