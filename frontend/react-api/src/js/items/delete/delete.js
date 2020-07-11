import React from 'react';
import './delete.scss';

const Delete = () => {

    return (
        <form className={"popup--inner__content--form__extra"} action={"http://localhost:5000/deleteBumster"} method={"post"}>
                <input className={"popup--inner__content--form__extra--input"} placeholder={"Enter bushmonsters name to delete :("} name={"name"}></input>
                <button className={"popup--inner__content--form__extra--button"} type={"submit"}>Submit</button>
        </form>
    )

}

export default Delete;