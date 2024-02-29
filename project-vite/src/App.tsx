import { useState } from 'react';
import Modal from './components/Modal';

function App() {
  // TODO: fix the state of this `todos`
  const [todos, setTodos] = useState<string[]>(['Do the dishes.', 'Finish this project.']);
  // TODO: make components needed for TODO

  // State to hold input text
  const [taskInput, setTaskInput] = useState('');

  // Function to add a task to the todos array
  const addTask = () => {
    if (taskInput.trim() !== '') {
      setTodos(prevTodos => [...prevTodos, taskInput]);
      setTaskInput(''); // Clear input after adding task
    }
  };

  // Function to delete task based on index
  const deleteTask = (index: number) => {
    setTodos(prevTodos => prevTodos.filter((_, idx) => idx !== index));
  };

  return (
    <>
      <ul>
        {
          // TODO: use `map` to render tasks from `todos`
          // remember about `keys` prop!
        }
        {/* Render tasks from `todos` */}
        {todos.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => deleteTask(index)}>Delete</button>
          </li>
        ))}
      </ul>

      <form
        style={{
          marginTop: '10px',
        }}
        onSubmit={(e) => { e.preventDefault(); addTask(); }} // Handle form submission
      >
        {
          // TODO: lift input text into a state so you can
          // handle it and add to `todos` array
        }
        <input 
          value={taskInput} 
          onChange={(e) => setTaskInput(e.target.value)} 
          placeholder="Enter task" 
        />
        <button type="submit">Create Task</button>
      </form>

      <Modal />
    </>
  );
}

export default App;
