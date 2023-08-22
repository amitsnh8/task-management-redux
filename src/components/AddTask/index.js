import React,{useState} from "react";
import { Box,TextField,Button } from "@mui/material";
import { addTodo } from "../../Redux/Action"; 


const AddTask=(props)=>{
    const [task,setTask]=useState("");
    const dispatch=props.dispatch;
    const handleTask=(e)=>{
        setTask(e.target.value);
    }
   const handleAddTask=()=>{
    if(task!==""){
        
   //console.log("addtask",dispatch(addTodo(task)));
        dispatch(addTodo(task));
        setTask("");
    }
   }
    return(
        <>
        <h1>Add Task</h1>
        <Box
          component="form"
          
          noValidate
          autoComplete="off"
        >
    
    <TextField id="outlined-basic" label="Name" variant="outlined" onChange={handleTask} value={task}  />
    
    <Button variant="contained" onClick={handleAddTask}>Contained</Button>
        </Box>
    </>
    )
}
export default AddTask;