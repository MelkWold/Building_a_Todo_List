// Import
import { useReducer, useState } from 'react';
import './App.css'


// Define Action types
const toDo = '';
const ACTIONS = {
    ADD_TO_DO: "ADD_TO_DO",
    EDIT_TO_DO: "EDIT_TO_DO",
    DELETE_TO_DO: "DELETE_TO_DO",
    TOOGLE: "TOOGLE_TO_DO"
};
// Define reducer
function toDoReducer (state, action){
  switch(action.type){
    case ACTIONS.ADD_TO_DO: 
      // Copy the existing todo items and create a new to do object using the input. Generate unique ID (? Not sure if there is a better option) based to current timestamp
        return [...state, { id:Date.now(), text: action.payload, completed: false, isEditing: false, },];
    
    case ACTIONS.TOOGLE_TO_DO: {
      // Find a todo list that matches the click 
      // Toggle a to-do items check box
        return todos.map((todo) => todo.id === action.payload ? { ...todo, completed: !todo.completed } : todo );
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



function App() {

  // Define the reducer function
  const [toDos, dispatch] = useReducer(toDoReducer, []);
  const [input, setInput] = useState("");

  // Handle adding a task
function handleAddTask(){
  // If users enter empty values don't do anything
  if(input.trim() === '') return;
 // else, add the input provided to the list:
  dispatch({ type: ACTIONS.ADD_TO_DO, payload: input });
  // then, clear the input 
  setInput("");
}

  return (
    <>
        <h1>Create Todo List</h1>
      {/*Add input and Add Button*/}
        <div>
          <input type = "text" placeholder="Enter a task" value = {input} onChange = {(e) =>setInput(e.target.value)}/>

          <button onClick={handleAddTask}>Add</button><br/>
       </div>

      {/*Add the List of To do*/}
       <ul>
          { toDos.map((todo)=> (
            <li key = {todo.id}>
              <input type="checkbox" checked= {todo.completed} onChange={()=>dispatch({ type: ACTIONS.TOOGLE_TO_DO, payload: todo.id}) }/>

              {todo.isEditing ? (
                <>

                  <input type ="text" defaultValue = {todo.text} ud = {`edit-${todo.id}`} />

                  <button onClick = { () => {
                    const newText = document.getElementById(`edit-${todo.id}`).value;
                    if (newText.trim() !== "") { dispatch ({ type: ACTIONS.SAVE_TO_DO, payload: { id: todo.id, newText }});
                    }
                  }}>Save</button>
                </>
              ): (
                <>
                  <span style = {{ textDecoration: todo.completed ? "none": "none", marginRight: "10px"}}>{todo.text}</span>

                  <button onClick={ () => dispatch({ type: ACTIONS.EDIT_TO_DO, payload: todo.id })
                  } diaabled = {!todo.completed}>Edit</button>

                  <button onClick = { () => dispatch({ type: ACTIONS.DELETE_TO_DO, payload: todo.id })} disabled = { !todo.completed }> Delete </button>
                </>
              )}
              
            </li>
          ))}
      </ul>            
    </>
  );
}

           

export default App
