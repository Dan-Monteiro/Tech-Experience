import React, { useState } from 'react';

const TodoList: React.FC = () => {

  const [todos, setTodos] = useState<string[]>([]);

  return (
    <div>
        {todos.map((todo, index)=> {
            return(
                <p key={index}>{ todo }</p>
            )
        })}
    </div>
  );
}

export default TodoList;