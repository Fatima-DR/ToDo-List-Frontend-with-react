import React, { useState } from 'react';
import './App.css';
import Header from "./Header/Header";
import TaskCount from "./TaskCount/TaskCount";
import Tasks from "./Tasks/Tasks";
import Toolbar from "./Toolbar/Toolbar";





function App() {

  const [tasks, setTasks] = useState([
    { Text: "Take kids to school", urgent: true, dueDate: "2020-04-02", completed: true, id: 1},
    { Text: "Go to work", urgent: false, dueDate: "2020-04-03", completed: true, id: 2 },
    { Text: "Finish Project", urgent: true, dueDate: "2020-04-04", completed: false, id: 3},

  ])

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
            <Tasks key={task.id} text={task.Text} urgent={task.urgent} dueDate={task.dueDate} completed={task.completed} />
            );
          })}
        </div>
      
      </div>



      <TaskCount count={tasks.length} />

    </div>
  );
}

export default App;
