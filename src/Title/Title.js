import React from "react";

function Title(props) {
    return (
        <div className="row">
            <div className="col -12 col md-3">
                <p>{props.name}</p>
            </div>
            <div className="col -3 col md-2">
                <p>{props.Urgent}</p>
            </div>
            <div className="col -3 col md-3">
                <p>{props.DueDate}</p>
            </div>
            <div className="col -3 col md-1">
                <p>{props.Complete}</p>
            </div>
            <div className="col -3 col md-3">
                <p>{props.Delete}</p>
            </div>
        </div>
    )
}




export default Title;
