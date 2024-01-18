import React from "react";
import './style.css'

function Card (props) {
    const {name, lastName, id, status} = props;
    
    const networkState = `networkColor ${status ? 'online' : 'offline'}`;
    
    return (
        <div className="cardUser">
        <p className="infoUser">User number: {id}</p>
        <p className="infoUser">User nickname: {name} {lastName}</p>
        <p className="infoUser" id="status">Status: <span className={networkState}>{status ? 'online' : 'offline'}</span></p>
    </div>
    );
};

export default Card;