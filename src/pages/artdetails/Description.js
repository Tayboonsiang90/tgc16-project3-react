import React from "react";

export default function Description(props) {
    return (
        <React.Fragment>
            <h3 className="mb-4 text-info">Description</h3>
            <p className="mw-2xl text-secondary">{props.description}</p>
            <h3 className="mb-4 text-info">{props.artist.first_name + " " + props.artist.last_name}</h3>
            <img className="img-fluid" src={props.artist.image_url} alt=""></img>
            <p className="mw-2xl text-secondary">{props.artist.profile}</p>
        </React.Fragment>
    );
}
