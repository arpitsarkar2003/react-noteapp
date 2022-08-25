import React from 'react'

function StoreNote() {
  return (
    <div className='mx-96'>
      <h1 className='text-4xl'>Your Notes</h1>
      <div className="card my-3">
        <div className="card-body my-2">
          <h2 className="card-titley my-2 text-3xl">Title</h2>
          <p className="card-texty my-2">Description</p>
            <button className="btn btn-primary my-2 mx-2" data-toggle="modal" data-target="#exampleModal">
              Edit
            </button>
          <a href="/" className="btn btn-danger my-2 mx-2">DELETE</a>
        </div>
      </div>
    </div>
  )
}

export default StoreNote