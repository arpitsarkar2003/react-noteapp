import React from 'react'

function StoreNote(props) {

  const updateItem=(idx) => {
    props.setUpdate(true);

    props.setItem((prevData) => {
    prevData.filter((currdata, each) =>{
      return each !== each.uuid();
    })
    })

    console.log(idx);

  }
  
  return (
    <div className='mx-96'>
      <h1 className='text-4xl'>Your Notes</h1>
      {
        props.notes.map((each, index)=> 
          <div className="card my-3" key={each.uuid}>
            <div className="card-body my-2">
              <h2 className="card-title my-2 text-3xl">{each.title}</h2>
              <p className="card-texty my-2">{each.description}</p>
              <button className="btn btn-primary my-2 mx-2" onClick={() => updateItem(each.uuid)}>
                Edit
              </button>
              <a href="/" className="btn btn-danger my-2 mx-2">DELETE</a>
            </div>
          </div>
        )
        // props.notes.map((index, each) => (
        //   <div className="card my-3" key={index}>
        //     <div className="card-body my-2">
        //       <h2 className="card-title my-2 text-3xl">{index}</h2>
        //       {/* <p className="card-texty my-2">{each.description}</p> */}
        //       <button className="btn btn-primary my-2 mx-2" data-toggle="modal" data-target="#exampleModal">
        //         Edit
        //       </button>
        //       <a href="/" className="btn btn-danger my-2 mx-2">DELETE</a>
        //     </div>
        //   </div>
        // ))
      }

    </div>
  )
}

export default StoreNote