import React from 'react'

export default function Todo({todo,onDelete}) {
    return (
        <>
            <div className="col-md-4 p-1 mx-0">
            <div className={`p-0 mx-0 card mb-3 border-${todo.priority}`}>
                <div className="card-header">Todo <span className="float-right">Priority <span className={`badge rounded p-1 badge-${todo.priority}`}> </span></span></div>
                <div className="card-body">
                    <h5 className="card-title ">{todo.title}</h5>
                    <p className="card-text">{todo.desc}</p>
                </div>
                <div className="card-footer bg-transparent border-success text-center"><button className="btn btn-sm btn-danger" onClick={()=>{onDelete(todo)}}>Delete</button></div>
            </div>
            </div>
        </>
    )
}
