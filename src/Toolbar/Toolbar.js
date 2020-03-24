import React from 'react';

function Toolbar(props) {
    return (
         <div className="container">
            <div className="row">
                <div className="col -12">
                    <div className="form-group " id="textbanner">
                        <input type="text" className="form-control" placeholder="Create Task" aria-label="Create Task"
                            aria-describedby="button-addon2" />
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col -12">
                    <div className="form-group form-check">
                        <label className="form-check-label" htmlFor="urgentCheck1">Urgent?</label><br />
                        <input type="checkbox" className="form-check-input" id="urgemtCheck1" />
                        <input type="date" className="form-control" />
                        <button className="btn btn-secondary" type="button" id="button-addon2">Add Task{props.count}</button>
                    </div>
                </div>
            </div>
         </div>


    )
}

export default Toolbar;
