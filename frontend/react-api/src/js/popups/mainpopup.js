import React from 'react';
import './popup.scss';

const Popup = (props) => {

    return (
        <div className={"popup"}>
            <div className={"popup--inner"}>
                <div className={"popup--inner__exit"}><button className={"popup--inner__exit--button"} onClick={props.exit}>X</button></div>
                <div className={"popup--inner__content"}>{props.children}</div>
            </div>
        </div>
    )

}


export default Popup;
