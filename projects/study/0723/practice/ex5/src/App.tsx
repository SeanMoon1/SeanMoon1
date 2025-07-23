import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

const App: React.FC = () => (
  <div>
    <h1>Redux Toolkit createSlice 실습</h1>
    <Counter />
    <hr />
    <TodoList />
  </div>
);

export default App;

