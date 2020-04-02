import React, { useState } from 'react';


function Toolbar(props) {
    const [taskText, setTaskText] = useState("");
    const isEnabled = taskText.length > 0;
    const [date, setDate] = useState(""); // TODO: use moment to set the initial date to todays date
    const [checked, setChecked] = useState(false);

    const handleTextChange = (event) => {
        setTaskText(event.target.value);
    }

    const handleDateChange = (event) => {
        setDate(event.target.value)

    }

    const handleUrgentChange = (event) => {
        setChecked(event.target.checked);
    }

    const handleAddTask = () => {
        props.addNewTaskFunc(taskText, checked, date);
        setTaskText("");
        setDate("");
        setChecked(false);
    }

    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col -5">
                    <input type="text" className="form-control" placeholder="Create Task" value={taskText} onChange={handleTextChange} />
                </div>
                <div className="col -1">
                    <label className="form-check-label" htmlFor="urgentCheck1">Urgent?</label><br />
                    <input type="checkbox" className="form-check-input" id="urgemtCheck1" checked={checked} onChange={handleUrgentChange} />
                </div>
                <div className="col -3">
                    <input type="date" className="form-control" value={date} onChange={handleDateChange} />
                </div>
                <div className="col -1">
                    <button className="btn btn-secondary" type="button" id="button-addon2" onClick={handleAddTask} disabled={!isEnabled} >Add Task{props.count}</button>
                </div>
            </div>
        </div>


    )
}

export default Toolbar;
