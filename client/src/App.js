import "./App.css";
import { useEffect, useState } from "react";
import Item from "./components/Item";
import axios from "axios";

function App() {
  const [Task, setTask] = useState("");
  const [Description, setDescription] = useState("");
  const [Status, setStatus] = useState(false);
  const [todo, setTodo] = useState([]);
  const [isUpdating, setUpdating] = useState("");
  //test
  useEffect(() => {
    axios
      .get("http://localhost:5000/get-todo")
      .then((res) => setTodo(res.data))
      .catch((err) => console.log(err));
  });

  const addUpdateTodo = () => {
    if (isUpdating === "") {
      axios
        .post("http://localhost:5000/save-todo", { Task, Description })
        .then((res) => {
          console.log(res.data);
          setTask("");
          setDescription("");
        })
        .catch((err) => console.log(err));
    } else {
      axios
        .post("http://localhost:5000/update-todo", {
          _id: isUpdating,
          Task,
          Description
        })
        .then((res) => {
          console.log(res.data);
          setTask("");
          setDescription("");
          setUpdating("");
        })
        .catch((err) => console.log(err));
    }
  };

  const deleteTodo = (_id) => {
    axios
      .post("http://localhost:5000/delete-todo", { _id })
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err));
  };

  const updateTodo = (_id, Task, Description) => {
    setUpdating(_id);
    setTask(Task);
    setDescription(Description);
  };

  return (
    <div className="App">
      <div className="container">
        <h1>ToDo App</h1>
        <div className="top">
          <input
            type="text"
            placeholder="Write Your Task"
            value={Task}
            onChange={(e) => setTask(e.target.value)}
          />
          <input
            type="text"
            placeholder="Task Description"
            value={Description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <div className="add" onClick={addUpdateTodo}>
          {isUpdating ? "Update" : "Add"}
          </div>
        </div>
        <div className="list">
          {todo.map((item) => (
            <Item
              key={item._id}
              Task={item.Task}
              Description={item.Description}
              remove={() => deleteTodo(item._id)}
              update={() => updateTodo(item._id, item.Task, item.Description)}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default App;

//MONGO_URL=mongodb+srv://admin:VfHIsaY5qj9T1ZB5@cluster0.gh2np.mongodb.net/?retryWrites=true&w=majority
//VfHIsaY5qj9T1ZB5