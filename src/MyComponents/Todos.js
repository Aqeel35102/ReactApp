import React from 'react'
import Todo from './Todo'
import NewTodo from './NewTodo'


export default function Todos(props) {
    let rowStyle = {
        overflowY: "auto",
        maxHeight: "465px"
    }
    return (
        <div>
            <div className='container-fluid'>
                <h3 className="text-center text-primary my-3">All Todo's List</h3>
                <NewTodo />
                <div className="row" style={rowStyle}>
                    {props.todos.map((todo)=>{
                        return <Todo todo={todo} key={todo.sno} onDelete={props.onDelete} />;
                    })}
                    

                </div>
            </div>
        </div>
    )
}
