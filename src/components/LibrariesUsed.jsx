import React from 'react';
import "./LibrariesUsed.css";

function Card(props) {
    return (
        <div className="card">
            <img src={props.imageUrl} alt={props.altName} />
            <div className="content">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
            </div>
        </div>
    )
}

export default Card