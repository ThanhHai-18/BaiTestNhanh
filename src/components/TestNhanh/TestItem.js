import React from "react";
import "../../CSS/TestItem.css";

export default function TestItem({ id, name, time, question, theme1, theme2, theme3 }){
    return(<div className="test-item">
        <div><h5>{name}</h5></div>

        <div className="test-info">
            <p>{time}</p>
            <p>{question}</p>
        </div>

        <div className="test-theme">
            <button className="theme">{theme1}</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="theme">{theme2}</button>
            &nbsp;&nbsp;&nbsp;&nbsp;
            <button className="theme">{theme3}</button>
        </div>
    </div>);
}