import React, { useState } from 'react';

export default function NewTodo(props) {
    const [Title, setTitle] = useState("");
    const [Description, setDescription] = useState("");
    const [Priority, setPriority] = useState("");
    let priorityStatus = ['success','danger','warning','primary','dark'];
    const onSubmit = (e) => {
        e.preventDefault();
        if(!Title || !Description){
            alert("Please enter title and description and Label");
            return;
        }else{
            let new_todo = {
                sno: null,
                title: Title,
                desc: Description,
                priority: Priority
              };
            props.addTodo(new_todo);
            document.getElementById('hideModal').click();
            setTitle('');
            setDescription('');

        }

    }

    return (
        <>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add Todo +</button>

            <div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">New Todo</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <form onSubmit={onSubmit}>
                            <div className="modal-body">
                                <div className="form-group">
                                    <label htmlFor="title" className="col-form-label">Title:</label>
                                    <input type="text" name="title" value={Title} onChange={(e)=>setTitle(e.target.value)} className="form-control" id="title" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Description" className="col-form-label">Description:</label>
                                    <textarea className="form-control" name="desc" onChange={(e)=>setDescription(e.target.value)} value={Description} id="Description"></textarea>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="Priority" className="col-form-label">Label:</label> <br />
                                    {priorityStatus.map((status)=>{
                                        return (<div key={status}>
                                        <input type="radio" className="m-1 p-1" onChange={(e)=>setPriority(e.target.value)} name="Priority" id={status} value={status} />  
                                    <label htmlFor={status}  className={`text-${status}`}>{status}</label><br />
                                        </div>)
                                    })}
                                    
                                    {/* <input type="radio" className="m-1 p-1" onChange={(e)=>setPriority(e.target.value)} name="Priority" id="primary" value="primary" /> 
                                    <label htmlFor="primary" className="text-primary">Primary</label><br />

                                    <input type="radio" className="m-1 p-1" onChange={(e)=>setPriority(e.target.value)} name="Priority" id="warning" value="warning" /> 
                                    <label htmlFor="warning" className="text-warning">Warning</label><br />

                                    <input type="radio" className="m-1 p-1" onChange={(e)=>setPriority(e.target.value)} name="Priority" id="danger" value="danger" /> 
                                    <label htmlFor="danger" className="text-danger">Danger</label><br />

                                    <input type="radio" className="m-1 p-1" onChange={(e)=>setPriority(e.target.value)} name="Priority" id="dark" value="dark" /> 
                                    <label htmlFor="dark" className="text-dark">Dark</label><br /> */}

                                    

                                </div>
                            </div>
                            <div className="modal-footer">
                                <button type="button" id="hideModal" className="btn btn-secondary" data-dismiss="modal">Close</button>
                                <button type="submit" className="btn btn-primary">Save Todo</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
