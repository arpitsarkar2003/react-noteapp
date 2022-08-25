import Header from './componets/Header';
import './App.css';
import CreateNote from './componets/CreateNote';
import StoreNote from './componets/StoreNote';
import React, { useState } from 'react';


function App() {
  const [additem, setadditem]= useState([]);

    const addnote=(note)=> {
      setadditem((prevData)=>{
        return [...prevData,note]
      })
    }



  return (
    <div className="App">
      <Header />
      <CreateNote passnote={addnote}/>
      <StoreNote />
    </div> 
  );
}

export default App;
