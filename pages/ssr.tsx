import React, { useState, useEffect } from 'react';
import axios from 'axios';

type Todo = {
 id: number;
 title: string;
 completed: boolean;
};

const App: React.FC = () => {
 const [todos, setTodos] = useState<Todo[]>([]);

 useEffect(() => {
    axios
      .get('https://jsonplaceholder.typicode.com/todos?_limit=5')
      .then((response) => setTodos(response.data))
      .catch((error) => console.log(error));
 }, []);

 return (
    <div id='con'>
      <h1>Todos</h1>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {todo.title} - {todo.completed ? 'Done' : 'Pending'}
          </li>
        ))}
      </ul>
    </div>
 );
};

export default App;