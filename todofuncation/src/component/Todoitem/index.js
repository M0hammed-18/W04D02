import React from "react";


const Todoitem=(props)=>{
    return(
        <div>
            <li>{props.todolist.name}

            </li>
            <button onClick={props.Update.id}>Update</button>
        </div>
    )
}
export default Todoitem;