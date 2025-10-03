// Import
import { useReducer, useState } from 'react';
import './App.css'

// Define Action types

const ACTIONS = {
    ADD_TO_DO: "ADD_TO_DO",
    EDIT_TO_DO: "EDIT_TO_DO",
    DELETE_TO_DO: "DELETE_TO_DO",
    TOOGLE: "TOOGLE"
};
// Define reducers
function toDoReducer (state, action){
  switch(action.type){
    case ACTIONS.ADD_TO_DO:
      return {...state, }; // Refine this- how do I dynamically add a new to do list with the edit and delete buttons next to it?
      case ACTIONS.EDIT_TO_DO:
        return {
          ...state, 
           }; // Refine this
        case ACTIONS.DELETE_TO_DO:
          return {...state,  }; // Refine this
          default:
            return state;

  }
};

function checkBoxReducer (state, action) {
  switch (action.type) {
    case "TOOGLE":
      return { isChecked: !state.isChecked }
      default:
        return state;
  }
}


function App() {

  // Define the reducer function
  const [toDo, dispatch] = useReducer(toDoReducer, {toDo:''})
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
        <h1>Create Todo List</h1>
        <input name = "addTask" placeholder="Add task"/>
        <button onClick={()=>dispatch({ type: "ADD_TO_DO" })}>Add</button><br/>
        <label>
            <input type="checkbox" checked= {isChecked} onChange={()=>dispatch({ type: "TOOGLE" })}/>
            <button type="button" onClick={()=>dispatch({ type: "EDIT_TO_DO" })}>Edit</button>
            <button type="button" onClick={()=>dispatch({ type: "DELETE_TO_DO" })}>Delete</button>
        </label>
        

        <div>
  
  
        </div>
      
    </>
  )
}

export default App
