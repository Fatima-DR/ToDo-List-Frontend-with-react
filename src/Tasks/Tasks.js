import React from "react";
import moment from "moment";
import "./Tasks.css";

function Task(props) {

    const handleDeleteClick = () => {
        props.deleteTaskFunc(props.id);
    }

    const handleCompleteClick = () => {
        props.completeTaskFunc(props.id);
    }

    return (
        <div className="row taskRow">
            <div className="col -12 col md-4">
                {props.text}
            </div>
            <div className="col -4 col md-3">
                {props.urgent === true ? "URGENT" : " "}
            </div>
            <div className="col -4 col md-3">
                {moment(props.dueDate).format("Do MMM YYYY")}
            </div>
            <div className="col -4 col md-2">
                {props.completed === false && <input type="checkbox" className="largerCheckbox" name="checkBox2" onClick={handleCompleteClick} />}
                {props.completed === true && <button className="btn btn-secondary" type="button" id="button-addon2" onClick={handleDeleteClick}>delete</button>}
            </div>
        </div>


    );
}


export default Task;