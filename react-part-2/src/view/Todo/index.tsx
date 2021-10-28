import React from 'react';
import { Provider } from '../../context/TodoContext';
import AddTodo from '../../components/AddTodo';
import TodoList from '../../components/TodoList';

const Todo: React.FC = () => {
  return (
      <div>
        <h3>ToDos</h3>
        <Provider>
          <AddTodo />
          <hr />
          <TodoList />
        </Provider>
      </div>
  );
}

export default Todo;