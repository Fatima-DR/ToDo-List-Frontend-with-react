import React, { useState, useEffect } from 'react';
import axios from "axios";
import './App.css';
import Header from "./Header/Header";
import TaskCount from "./TaskCount/TaskCount";
import Tasks from "./Tasks/Tasks";
import Toolbar from "./Toolbar/Toolbar";



function App() {

  const [tasks, setTasks] = useState([ ])

  useEffect(() => {
    axios.get("https://mgen6vrtp0.execute-api.eu-west-1.amazonaws.com/dev/tasks")
    .then(response => {
      console.log("success", response);
      setTasks(response.data);
    })
    .catch(err => {
      console.log("Error",err)
    })
  }, [])


  
// fetch tasks from back end  
  const deleteTask = id => {
    // issue delete request to my api from postman
    // if resoves then filter my tasks on the frontend to remove the task with given id
    axios.delete(`https://mgen6vrtp0.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`)
    .then(response => {
      const filteredTasks = tasks.filter(task => {
        return task.TaskID !== id;
  
      })
  
      setTasks(filteredTasks);
    })
    .catch(err => {
      console.log("API error", err )
    })
  }
    

  const completeTask = (id) => {

    axios.put(`https://mgen6vrtp0.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`,{
      Completed: true
    })
    .then((response) => {
      const newTask = tasks.map(task => {
        if (task.TaskID === id) {
          console.log(`Updated task ${id}`, response)
          task.Completed = 1;
        }
        return task;
  
      });
  
      setTasks(newTask);
    })
    .catch((err) => {
      console.log("Error updating completed")
    })
  }

  const addNewTask = (text, urgent, date) => {

  axios.post("https://mgen6vrtp0.execute-api.eu-west-1.amazonaws.com/dev/tasks", {
    Task: text,
    Urgent: urgent,
    DueDate: date,
  })
    .then(response => {
      const newTask = response.date
      const newTasks = [...tasks, newTask];
    console.log(newTasks);
      console.log("saved", response)
      setTasks(newTasks);
    })
  
    .catch(err => {
      console.log("error creating task", err)
    })

  } 

 
  return (  
    <div className="App">
      <Header />
      <br />
      <div>
        <br />
        <Toolbar addNewTaskFunc={addNewTask} />
        <div className="container">

          <br />
          <br />

          {tasks.map((task) => {
            return (
              <Tasks key={task.TaskID} deleteTaskFunc={deleteTask} completeTaskFunc={completeTask} text={task.Task} urgent={task.Urgent} dueDate={task.DueDate} completed={task.Completed} id={task.TaskID} />
            );
          })}
        </div>

      </div>



      <TaskCount count={tasks.length} />

    </div>
  );
}

export default App;
