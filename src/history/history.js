import "./history.css";
import { Component } from "react";
import ITEM_STATE from "./item_state";
export default function Page_STATE(props) {
    let key = props.info.key;
    console.log(key)
    return (
        <div className="main_page">
            {Object.keys(key).map((keyId, index) => (
                <ITEM_STATE key={index} keyData={key[keyId]} />
            ))}
        </div>
    );
}