export const addTodo=(text)=>({
    type:'ADD_TO_DO',
    payload:text

})
export const removeTodo=(index)=>({
    type:'REMOVE_TO_DO',
    payload:index

})