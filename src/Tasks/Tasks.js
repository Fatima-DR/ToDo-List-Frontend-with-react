import React from "react";
import moment from "moment";
import "./Tasks.css";

function Task(props) {
    //props = {text: "Do the dishes"}
    // <p>
    //     {props.text} - {props.urgent === true ? "URGENT" : " "} Date Complete checkbox | Delete button
    // </p>
    return (
        <div className="row taskRow">
            <div className="col -12 col md-3">
                {props.text}
            </div>
            <div className="col -3 col md-2">
                {props.urgent === true ? "URGENT" : " "}
            </div>
            <div className="col -3 col md-3">
                {moment(props.dueDate).format("Do MMM YYYY")}
            </div>
            <div className="col -3 col md-1">
                {props.completed === false && <input type="checkbox" className="largerCheckbox" name="checkBox2" />}
            
            </div>
            <div className="col -3 col md-3">
            <button className="btn btn-secondary" type="button" id="button-addon2" >delete</button>
            </div>
        </div>

            
    );
}


export default Task;