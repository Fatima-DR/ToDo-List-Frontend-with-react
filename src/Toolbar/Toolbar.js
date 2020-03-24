import React from 'react';

function Toolbar(props) {
    return (
        <div className="container">
            <div className="row mb-3">
                <div className="col -5">
                    <input type="text" className="form-control" placeholder="Create Task" />
                </div>
                <div className="col -1">
                    <label className="form-check-label" htmlFor="urgentCheck1">Urgent?</label><br />
                    <input type="checkbox" className="form-check-input" id="urgemtCheck1" />
                </div>
                <div className="col -3">
                    <input type="date" className="form-control" />
                </div>
                <div className="col -1">
                    <button className="btn btn-secondary" type="button" id="button-addon2">Add Task{props.count}</button>
                </div>
            </div>
        </div>


    )
}

export default Toolbar;
