import React from "react";

function TaskCount(props) {
    return <h2 className="floating-bottom"><span className="badge badge-secondary"><p>{props.count}</p></span> Tasks Left</h2>
    
}

export default TaskCount;
