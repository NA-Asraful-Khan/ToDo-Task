import "./App.css";
import {useEffect, useState} from 'react';
import Item from "./Components/Item";
import axios from 'axios';

function App() {
  const [text, setText]=useState('');
  const [todo, setTodo]= useState([]);
//test
  useEffect(()=>{
    axios.get('http://localhost:5000/get-todo')
    .then((res)=>console.log(res.data))
    .catch((err)=>console.log(err));
  })
  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input type="text" placeholder="Write Your Task" value={text} onChange={(e)=> setText(e.target.value)}/>

          <div className="add">Add</div>
        </div>
        <div className="list">
          <Item></Item>
        </div>
      </div>
    </div>
  );
}

export default App;
