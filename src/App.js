import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.min.js';



import Header from "./MyComponents/Header";
import Footer from "./MyComponents/Footer";
import About from "./MyComponents/About";
import Login from "./MyComponents/Login";


import Todos from "./MyComponents/Todos";
import React, { useState , useEffect} from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  let initTodos;
  if(localStorage.getItem('todos')===null){
    initTodos = [];
  }else{
    initTodos = JSON.parse(localStorage.getItem('todos'));
  }

  const [todos, setTodos] = useState(initTodos);
  useEffect(() => {
    localStorage.setItem('todos',JSON.stringify(todos));
  }, [todos])
  
  function addTodo(new_todo){
    let sno = todos.length>0 ? todos[todos.length-1].sno+1 : 1;
    new_todo.sno = sno;
    setTodos([...todos,new_todo]);
  };
  const onDelete = (todo) => {
    setTodos(todos.filter((e) => {
      return e !== todo;
    }));
  };
  return (

    <>
    <Router>
      <Header title="My Todos" />
      <div className='container'>
        <Routes>
          <Route exact path="/" element={<Todos todos={todos} addTodo={addTodo} onDelete={onDelete} />} />
          
          <Route exact path="/about" element={<About />} />
          <Route exact path="/login" element={<Login />} />

          
        </Routes>
        <Footer />


      </div>
      </Router>
      </>
  );
}

export default App;
