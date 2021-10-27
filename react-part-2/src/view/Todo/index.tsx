import React from 'react';
import AddTodo from '../../components/AddTodo';
import TodoList from '../../components/TodoList';

const Todo: React.FC = () => {
  return (
      <div>
        <h3>ToDos</h3>
        <AddTodo />
        <hr />
        <TodoList />
      </div>
  );
}

export default Todo;