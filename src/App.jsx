// Import
import { useReducer, useState } from 'react';
import './App.css'


// Define Action types
const toDo = '';
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
      // Refine this
      return {...state, }; 
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

function handleAddTask() {

}

function App() {

  // Define the reducer function
  const [toDo, dispatch] = useReducer(toDoReducer, {toDo:''})
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
        <h1>Create Todo List</h1>

        <div>
          <input type = "text" placeholder="Enter a task" onChange = {(event) => setNewText(e.target.value)} />

          <button onClick={handleAddTask}>Add</button><br/>
        
          {toDo.map((item)=> {
            <div>
            <li>{item}</li>
                <input type="checkbox" checked= {isChecked} onChange={()=>dispatch({ type: "TOOGLE" })}/>
                <button type="button" onClick={()=>dispatch({ type: "EDIT_TO_DO" })}>Edit</button>
                <button type="button" onClick={()=>dispatch({ type: "DELETE_TO_DO" })}>Delete</button>
            </div>
                
            })} 
        </div><br/>
                 
  </>
  )
}

export default App
