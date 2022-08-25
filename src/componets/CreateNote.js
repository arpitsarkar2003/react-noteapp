import React, { useState } from 'react'
import { v4 } from 'uuid'

function CreateNote(props) {
  const [note , setnote] = useState({
    uuid: v4(),
    title: "",
    description: "",
  });

  

  const SubmitHandel=(event)=> {
    const {name , value} = event.target;

    setnote((prevData) =>{
      return{
        ...prevData,
        [name]:value,
      };
    })
  }
  const addHandel = (e)=> {
    e.preventDefault();
    if (props.update) {
      props.setUpdate(false);
    } else {
      props.passnote(note);
    }

    setnote({
      uuid: v4(),
      title: "",
      description: "",
    });
    
  }
  return (
    <>
      <form className='justify-center mx-96 my-10'>
        <h1 className='text-4xl'>Take Some Note !</h1>
        <div className='border p-2 hover:bg-slate-50 my-4'>
          <div className="form-group my-3">
            <input type="title" className="form-control" name='title' id="Title" value={note.title}  onChange={SubmitHandel}  placeholder="Enter Title"/>
          </div>
          <div className="form-group  my-3">
            <textarea type="password" className="form-control h-36" name='description' id="Des" onChange={SubmitHandel} value={note.description} placeholder="Enter Description" />
          </div>
          <button className="border p-2 btn hover:bg-blue-700 hover:text-white w-20" onClick={addHandel}>{props.update ? "Edit" : "Submit"}</button>
          </div>
        </form>
    </>
  )
}

export default CreateNote