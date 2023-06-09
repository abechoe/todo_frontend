import { useState, useEffect } from 'react'
import './App.css'
import axios from 'axios';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState('');

  useEffect(() => {
    const getTodos = async () => {
      const response = await axios.get('http://localhost:5068/api/todo')

      setTodos(response?.data ?? '');
    }

    getTodos();
  })

  return (
    <>
      <h1>Todos</h1>
      <div className='card'>
        Response from API: {todos}
      </div>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

export default App
