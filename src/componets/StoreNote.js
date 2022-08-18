import React from 'react'

function StoreNote() {
  return (
    <div className='mx-96'>
      <h1 className='text-4xl'>Your Notes</h1>
      <div className="card my-3">
        <div className="card-body my-2">
          <h2 className="card-titley my-2 text-3xl">Title</h2>
          <p className="card-texty my-2">Description</p>
            <button type="button" className="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
              Launch demo modal
            </button>

            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
              <div className="modal-dialog" role="document">
                <div className="modal-content">
                  <div className="modal-header">
                    <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                    <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                      <span aria-hidden="true">&times;</span>
                    </button>
                  </div>
                  <div className="modal-body">
                    ...
                  </div>
                  <div className="modal-footer">
                    <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="button" className="btn btn-primary">Save changes</button>
                  </div>
                </div>
              </div>
            </div>

          <a href="/" className="btn btn-danger my-2 mx-2">DELETE</a>
        </div>
      </div>
    </div>
  )
}

export default StoreNote