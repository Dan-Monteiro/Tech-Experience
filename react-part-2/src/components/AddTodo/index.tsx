import React, { FormEvent, useState } from 'react';

const AddTodo: React.FC = () => {

    const [ todo, setTodo ] = useState<String>('');

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(todo);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="Inform the todo..." 
                    onChange={(e) => setTodo(e.target.value)}/>
                <input type="submit" value="ADD"/>
            </form>
        </div>
    );
}

export default AddTodo;