import logo from './logo.svg';
import './App.css';
import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";

import Todos from "./MyComponents/Todos";
import React, { useState } from 'react';


function App() {
  const onDelete = (todo) => {
console.log("deleting item",todo);
// let index = todos.indexOf(todo);
// todos.splice(index,1);
setTodos(todos.filter((e)=>{
  return e!==todo;
}));
  }
  const [todos,setTodos] = useState([
    {
      sno: 1,
      title: "My Title 1",
      desc: "My description here. 1",
      priority: 'success'
  
    },
    {
      sno: 2,
      title: "My Title 2",
      desc: "My description here. 2",
      priority: 'primary'
  
    },
    {
      sno: 3,
      title: "My Title 3",
      desc: "My description here. 3",
      priority: 'warning'
  
    },
    {
      sno: 4,
      title: "My Title 4",
      desc: "My description here. 4",
      priority: 'danger'
  
    },
    {
      sno: 5,
      title: "My Title 5",
      desc: "My description here. 5",
      priority: 'dark'
  
    },
    {
      sno: 6,
      title: "My Title 6",
      desc: "My description here. 6",
      priority: 'danger'
  
    },
    {
      sno: 7,
      title: "My Title 7",
      desc: "My description here. 7",
      priority: 'warning'
  
    },
    ]);
  return (
    // <div classNameName="App">
    //   <header classNameName="App-header">
    //     <img src={logo} classNameName="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       classNameName="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
<>
<Header title="My Todos"/>
    <div className='container'>
    <Todos todos={todos} onDelete={onDelete} />
    
    <Footer />


    </div></>
  );
}

export default App;
