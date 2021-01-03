import React from 'react';
import ReactDOM from 'react-dom';
//importing the styleesheet
import './index.css';
//importing the main component
import TodoList from './TodoList';

ReactDOM.render(
  <TodoList />,
  document.getElementById('root')
);

