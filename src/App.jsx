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
// Define reducer
function toDoReducer (state, action){
  switch(action.type){
    case ACTIONS.ADD_TO_DO: {
      return {...state, }
    }
       
      case ACTIONS.EDIT_TO_DO: {
        return {...state, }
      } // complete this
        
        case ACTIONS.DELETE_TO_DO: {
          return {...state,  }; // complete this
        } 
          default:
            return state;

  }
};

// Handle adding a task
function handleAddTask(){
  //complete the code 
}

function App() {

  // Define the reducer function
  const [toDo, dispatch] = useReducer(toDoReducer, {toDo:''})
  const [isChecked, setIsChecked] = useState(false)

  return (
    <>
        <h1>Create Todo List</h1>
      {/*Add input and Add Button*/}
        <div>
          <input id = "addTask" type = "text" placeholder="Enter a task" value = {input} onChange = {(e) =>setInput(e.target.value)}/>

          <button onClick={handleAddTask}>Add</button><br/>
       </div>

      {/*Add the List of To do*/}
       <div>
          {/* {toDo.map((item)=> {
            <div>
            <li>{item}</li>
                <input type="checkbox" checked= {isChecked} onChange={()=>dispatch({ type: "TOOGLE" })}/>
                {is.Checked} ? <button type="button" onClick={()=>dispatch({ type: "EDIT_TO_DO" })}>Edit</button>
               {isChecked} ? <button type="button" onClick={()=>dispatch({ type: "DELETE_TO_DO" })}>Delete</button>
            </div>
                
            })}  */}
      </div><br/>
                 
  </>
  )
}

export default App
