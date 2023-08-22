import React from "react";

const ManageTask=(props)=>{
    const todos=props.todos;
    const removeToDo=props.removeToDo;
    console.log("managetask",props);
    
return(
    <>
    <h1>Manage Task</h1>
    <ul>
        {todos.map((item,index)=>{
return (<li key={index}>{item}<button onClick={()=>removeToDo(index)}>X</button></li>)
        })}

</ul>
</>
)
}
export default ManageTask;