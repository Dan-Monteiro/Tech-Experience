import React, { FormEvent, useState, useContext, useRef } from 'react';
import { Context as TodoContext } from '../../context/TodoContext';
import { addTodo } from '../../actions/TodoActions';

const AddTodo: React.FC = () => {

    const { dispatch } = useContext(TodoContext);
    
    const textInput = useRef<HTMLInputElement>(null);

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        let value = textInput.current!.value;

        if(value.trim() === '') {
            return;
        }

        dispatch(addTodo({
            id: new Date().getTime().toString(),
            title: value,
            active: true
        }));
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Inform the todo..."
                    required 
                    ref={textInput} />
                <button type="submit">ADD</button>
            </form>
        </div>
    );
}

export default AddTodo;