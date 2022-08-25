import Header from './componets/Header';
import './App.css';
import { v4 } from 'uuid'
import CreateNote from './componets/CreateNote';
import StoreNote from './componets/StoreNote';
import React, { useState, useEffect } from 'react';


function App() {
  const [additem, setadditem]= useState([]);
  const [update, setUpdate] = useState(false);

  const [item, setItem] = useState({
    uuid: v4,
    title: "", 
    description: ""
  });


    const addnote=(note)=> {
      // console.log(note);
      // setadditem((prevData)=>{
      //   return [...prevData, note]
      // })
      setadditem([...additem, note]);
    }

    useEffect(()=>{
      console.log(additem);
    }, [additem]);




  return (
    <div className="App">
      <Header />
      <CreateNote passnote={addnote} update={update} setUpdate={setUpdate}/>
      <StoreNote notes={additem} update={update} setUpdate={setUpdate} item={item} setItem={setItem}/>
    </div> 
  );
}

export default App;
