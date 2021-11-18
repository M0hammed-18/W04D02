import React from "react";
import { useState } from "react";
import "./style.css";
import Todoitem from "../Todoitem";

const Todo = () => {
  const [todolist, setTodo] = useState([
    { id: 1, name: "Mohammed" },
    { id: 2, name: "Ali" },
  ]);
  const Add = (e) => {
    e.preventDefault();
    const newvalue=e.target.task.value;
    if (newvalue) {
      setTodo([...todolist, { id:todolist.length+1, name: newvalue }]);
    }
  };
  const Update=()=>{
      const Updatevalue=e.target.task.value;
      setTodo()
  }
  return (
    <div>
      <form onSubmit={Add}>
        <input type="text" name="task" />
        <button>Add Task</button>
        
      </form>
      <ul>
        {todolist.map((todoo, i) => (
          // this.setState.todos;
          <Todoitem todolist={todoo} Update={Update} key={i} />
        ))}
      </ul>
    </div>
  );
};
export default Todo;
