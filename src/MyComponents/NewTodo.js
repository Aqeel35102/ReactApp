import React from 'react'

export default function NewTodo() {
  return (
    <>
       <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">Add Todo</button>

<div className="modal fade" id="exampleModal" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <h5 className="modal-title" id="exampleModalLabel">New Todo</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div className="modal-body">
                <form>
                    <div className="form-group">
                        <label htmlFor="title" className="col-form-label">Title:</label>
                        <input type="text" className="form-control" id="title" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Description" className="col-form-label">Description:</label>
                        <textarea className="form-control" id="Description"></textarea>
                    </div>
                </form>
            </div>
            <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                <button type="button" className="btn btn-primary">Save Todo</button>
            </div>
        </div>
    </div>
</div>
    </>
  )
}