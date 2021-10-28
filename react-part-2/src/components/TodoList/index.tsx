import React, { useContext } from 'react';
import { Context } from '../../context/TodoContext';
import { removerTodo } from '../../actions/TodoActions';

const TodoList: React.FC = () => {

  const {
    state: { todos },
    dispatch
  } = useContext(Context);

  const handleDelete = (id: string) => {
    dispatch(removerTodo(id));
  }

  return todos.length > 0 ? (
    <div>
      <ul>
        {todos.map(({id, title}) => {
          return(
            <li key={id}>
              { title } - <button onClick={() => handleDelete(id)}>remove</button>
            </li>
          );
        })}
      </ul>
    </div>
  ) : (
    <div>
      <h5>Nada para fazer por enquanto!</h5>
    </div>
  );
}

export default TodoList;