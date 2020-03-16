import React from 'react';
import './App.css';
import Header from "./Header/Header";
import TaskCount from "./TaskCount/TaskCount";
import Tasks from "./Tasks/Tasks";
import Toolbar from "./Toolbar/Toolbar";



function App() {
  return (
    <div className="App">
      <Header />
      <br />
      <main>
        <Toolbar />


        <div>
          <br />
          <br />
          <Tasks />

        </div>
        <TaskCount />
      </main>
    </div>
  );
}

export default App;
