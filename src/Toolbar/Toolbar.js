import React from 'react';

function Toolbar() {
    return (
        <div class="input-group mb-3" id="textbanner">
            <input type="text" class="form-control" placeholder="Create Task" aria-label="Create Task"
                aria-describedby="button-addon2"></input>
            <div class="input-group-append">
                <button class="btn btn-secondary" type="button" id="button-addon2">Add Task</button>
            </div>
        </div>
    )
}

export default Toolbar;
