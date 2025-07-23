// src/App.tsx
import React from 'react';
import Counter from './components/Counter';
import TodoList from './components/TodoList';

const App: React.FC = () => (
  <div>
    <h1>Zustand 상태관리 실습</h1>
    <Counter />
    <hr />
    <TodoList />
  </div>
);

export default App;