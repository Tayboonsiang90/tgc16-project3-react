import React from "react";

export default function Vault(props) {
    return (
        <React.Fragment>
            <h3 className="mb-4 text-info">
                {props.vault.name}
            </h3>
            <p className="mw-2xl text-secondary">{props.vault.address}</p>
            <img className="img-fluid" src={props.vault.image_url} alt=""></img>
        </React.Fragment>
    );
}
