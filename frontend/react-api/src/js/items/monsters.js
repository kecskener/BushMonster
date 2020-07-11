import React from 'react';


const Monster = (props) => {

    return (
        <div className={"main--list__item__container"}>
            <p className={"main--list__item__container--text"}>{props.name}</p>
            <p className={"main--list__item__container--text"}>{props.age}</p>
            <p className={"main--list__item__container--text"}>{props.color}</p>
            <p className={"main--list__item__container--text"}>{props.gender}</p>
            <p className={"main--list__item__container--description"}>{props.description}</p>
        </div>
    )

}

export default Monster;
