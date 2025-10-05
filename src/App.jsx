// Import
import { useReducer, useState } from "react";
import "./App.css";

// Define Action types
const ACTIONS = {
  ADD_TO_DO: "ADD_TO_DO",
  EDIT_TO_DO: "EDIT_TO_DO",
  DELETE_TO_DO: "DELETE_TO_DO",
  TOGGLE: "TOGGLE_TO_DO",
  SAVE_TO_DO: "SAVE_TO_DO",
};
// Define reducer
function toDoReducer(state, action) {
  switch (action.type) {
    case ACTIONS.ADD_TO_DO:
      // Copy the existing todo items and create a new to do object using the input. Generate unique ID (? Not sure if there is a better option) based to current timestamp
      return [
        ...state,
        {
          id: Date.now(),
          text: action.payload,
          completed: false,
          isEditing: false,
        },
      ];

    case ACTIONS.TOGGLE_TO_DO: {
      // Map over the state list to find a todo list that matches the choice
      // Create a copy of the todo
      // Toggle a to-do items check box
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );
    }

    case ACTIONS.EDIT_TO_DO: {
      // Map over the state list to find a todo list that matches the choice
      // Create a copy of the todo
      // set isEditing to true to make the todo editable
      return state.map((todo) =>
        todo.id === action.payload ? { ...todo, isEditing: true } : todo
      );
    }

    case ACTIONS.SAVE_TO_DO:
      return state.map((todo) =>
        todo.id === action.payload.id
          ? { ...todo, text: action.payload.newText, isEditing: false }
          : todo
      );

    case ACTIONS.DELETE_TO_DO: {
      // Loop through all state and keeps those whose ID doesn't match the one passed by the action
      return state.filter((todo) => todo.id !== action.payload);
    }
    default:
      return state;
  }
}

function App() {
  // Define the reducer function
  const [state, dispatch] = useReducer(toDoReducer, []);
  const [input, setInput] = useState("");

  // Handle adding a task
  function handleAddTask() {
    // If users enter empty values don't do anything
    if (input.trim() === "") return;
    // else, add the input provided to the list:
    dispatch({ type: ACTIONS.ADD_TO_DO, payload: input });
    // then, clear the input
    setInput("");
  }

  return (
    <div className = "mainContainer">
      <h1>Create Todo List</h1>
      {/*Add input and Add Button*/}

      <div className = "inputContainer">
        <input className = "inputElement"
          type="text"
          placeholder="Enter a task"
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />

        <button onClick={handleAddTask}>Add</button>
        <br />
      </div>

      {/*Add the List of To do*/}
      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            <input
              type="checkbox"
              checked={todo.completed}
              onChange={() =>
                dispatch({ type: ACTIONS.TOGGLE_TO_DO, payload: todo.id })
              }
            />

            {todo.isEditing ? (
              <>
                <input
                  type="text"
                  defaultValue={todo.text}
                  id={`edit-${todo.id}`}
                />

                <button
                  onClick={() => {
                    const newText = document.getElementById(
                      `edit-${todo.id}`
                    ).value;
                    if (newText.trim() !== "") {
                      dispatch({
                        type: ACTIONS.SAVE_TO_DO,
                        payload: { id: todo.id, newText },
                      });
                    }
                  }}
                >
                  Save
                </button>
              </>
            ) : (
              <>
                <span>{todo.text}</span>

                <button
                  onClick={() =>
                    dispatch({ type: ACTIONS.EDIT_TO_DO, payload: todo.id })
                  }
                  disabled={!todo.completed}
                >
                  Edit
                </button>

                <button
                  onClick={() =>
                    dispatch({ type: ACTIONS.DELETE_TO_DO, payload: todo.id })
                  }
                  disabled={!todo.completed}
                >
                  {" "}
                  Delete{" "}
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
