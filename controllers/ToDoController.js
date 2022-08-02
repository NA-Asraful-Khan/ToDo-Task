const ToDoModel = require("../models/TODoModel");

module.exports.getToDo = async (req, res) => {
  const Todo = await ToDoModel.find();
  res.send(Todo);
};

module.exports.saveToDo = async (req, res) => {
  const Obj = req.body;
  ToDoModel.create(Obj)
    .then(() => res.set(201).send("Added Succesfully..."))
    .catch((err) => console.log(err));
};

module.exports.deleteToDo = (req, res) => {
  const { _id } = req.body;

  ToDoModel.findByIdAndDelete(_id)
    .then(() => res.set(201).send("Deleted Successfully...."))
    .catch((err) => console.log(err));
};

module.exports.updateToDo = (req, res) => {
  const { _id, Task,Description } = req.body;

  ToDoModel.findByIdAndUpdate(_id, { Task, Description })
    .then(() => res.set(201).send("Updated Successfully..."))
    .catch((err) => console.log(err));
};
