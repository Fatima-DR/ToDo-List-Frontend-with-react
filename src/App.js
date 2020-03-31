import React, { useState } from 'react';
import './App.css';
import Header from "./Header/Header";
import TaskCount from "./TaskCount/TaskCount";
import Tasks from "./Tasks/Tasks";
import Toolbar from "./Toolbar/Toolbar";


//click on the delete button 
//application needs to know someone clicked the button (listen for the event)
//know which button was clicked 
//delete relevant object from our state

//click on the complete checkbox 
//application need to know someone clicked the button(listen for the even)
//know which button was clicked
//complete relevant object from state

function App() {

  const [tasks, setTasks] = useState([
    { Text: "Take kids to school", urgent: true, dueDate: "2020-04-02", completed: true, id: 1 },
    { Text: "Go to work", urgent: false, dueDate: "2020-04-03", completed: false, id: 2 },
    { Text: "Finish Project", urgent: true, dueDate: "2020-04-04", completed: false, id: 3 },

  ])


  const deleteTask = (id) => {
    const filteredTasks = tasks.filter((task) => {
      return task.id !== id;

    })

    setTasks(filteredTasks);
  }

  const completeTask = (id) => {
    const newTask = tasks.map(task => {
      if (task.id === id) {
        task.completed = true;
      }
      return task;

    });

    setTasks(newTask);
  }
  return (
    <div className="App">
      <Header />
      <br />
      <div>
        <br />
        <Toolbar />
        <div className="container">

          <br />
          <br />

          {tasks.map((task) => {
            return (
              <Tasks key={task.id} deleteTaskFunc={deleteTask} completeTaskFunc={completeTask} text={task.Text} urgent={task.urgent} dueDate={task.dueDate} completed={task.completed} id={task.id} />
            );
          })}
        </div>

      </div>



      <TaskCount count={tasks.length} />

    </div>
  );
}

export default App;
