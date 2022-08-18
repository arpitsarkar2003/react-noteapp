import React from 'react'

function CreateNote({Title,setTitle,Des,setDes}) {
  const inputHandeler=(e) => {
    if(e.target.id==="Title"){
      setTitle(e.target.value)
    }else{
      setDes(e.target.value)
    }
  }
  const addnoteHandel=(e)=> {
    e.prevntDefault()
  }
  return (
    <>
      <form className='justify-center mx-96 my-10'>
        <h1 className='text-4xl'>Take Some Note !</h1>
        <div className='border p-2 hover:bg-slate-50 my-4'>
          <h1 className='text-3xl'>{Title}</h1>
          <div className="form-group my-3">
            <input type="email" className="form-control" id="Title" value={Title} placeholder="Enter Title" onChange={inputHandeler}/>
          </div>
          <h1 className='text-3xl'>{Des}</h1>
          <div className="form-group  my-3">
            <textarea type="password" className="form-control" id="Des" value={Des} placeholder="Enter Description" />
          </div>
          <button type="submit" onClick={addnoteHandel} className="border p-2 btn hover:bg-blue-700 hover:text-white">Submit</button>
          </div>
        </form>
    </>
  )
}

export default CreateNote