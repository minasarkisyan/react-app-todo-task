import React from 'react';
import './app-header.css';

const AppHeader = ({toDo, active, done}) => {
  return (
    <div className="app-header d-flex">
      <h1>Todo List</h1>
      <h2>{toDo} all to do, {active} active, {done} done</h2>
    </div>
  );
};

export default AppHeader;
