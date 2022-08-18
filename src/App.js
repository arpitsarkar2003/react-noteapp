import Header from './componets/Header';
import './App.css';
import CreateNote from './componets/CreateNote';
import StoreNote from './componets/StoreNote';
import { useState } from 'react';

function App() {
  const [Title , setTitle] = useState("")
  const [Des , setDes] = useState("")
  return (
    <div className="App">
      <Header />
      <CreateNote title={Title} setTitle={setTitle} des={Des} setDes={setDes}/>
      <StoreNote/>
    </div>
  );
}

export default App;
