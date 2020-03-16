import React from "react";

function Tasks() {
    //props = {text: "Do the dishes"}
    return (
        <div class="container">
            <div class="row">
                <div class="col-3">
                    <p>Urgent?</p>
                </div>
                <div class="col-3">
                    <p>Tasks</p>
                </div>
                <div class="col-3">
                    <p>Complete</p>
                </div>
                <div class="col-3">
                    <p>Delete</p>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    <br />
                </div>
                <div class="col-3">
                    <br />
                </div>
                <div class="col-3">
                    <br />
                </div>
                <div class="col-3">
                    <br />
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    Yes
            </div>
                <div class="col-3">
                    task 1
            </div>
                <div class="col-3">
                    <input type="checkbox" class="largerCheckbox" name="checkBox2" ></input>
                </div>
                <div class="col-3">
                    <button class="btn btn-secondary" type="button" id="button-addon2">delete</button>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    Yes
            </div>
                <div class="col-3">
                    task 2
            </div>
                <div class="col-3">
                    <input type="checkbox" class="largerCheckbox" name="checkBox2" ></input>
                </div>
                <div class="col-3">
                    <button class="btn btn-secondary" type="button" id="button-addon2">delete</button>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    No
            </div>
                <div class="col-3">
                    task 3
            </div>
                <div class="col-3">
                    <input type="checkbox" class="largerCheckbox" name="checkBox2" ></input>
                </div>
                <div class="col-3">
                    <button class="btn btn-secondary" type="button" id="button-addon2">delete</button>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    Yes
            </div>
                <div class="col-3">
                    task 4
            </div>
                <div class="col-3">
                    <input type="checkbox" class="largerCheckbox" name="checkBox2" ></input>
                </div>
                <div class="col-3">
                    <button class="btn btn-secondary" type="button" id="button-addon2">delete</button>
                </div>
            </div>
            <div class="row">
                <div class="col-3">
                    No
            </div>
                <div class="col-3">
                    task 5
            </div>
                <div class="col-3">
                    <input type="checkbox" class="largerCheckbox" name="checkBox2" ></input>
                </div>
                <div class="col-3">
                    <button class="btn btn-secondary" type="button" id="button-addon2">delete</button>
                </div>
            </div>

        </div>
    );
}

export default Tasks;