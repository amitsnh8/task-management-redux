const initialState=[];
export const todos = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_DO':
        return [
          ...state,
          action.payload
        ]
      case 'REMOVE_TO_DO':
        const list=state.filter((todo,id) =>
            (
                id !== action.payload)
          )
          console.log("reducer remove",action.payload,list);
        return list;
      default:
        return state
    }
  }
  
  