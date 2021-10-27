import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addNewPerson } from '../../store/modules/actions';
import { FormEvent } from "react";
import { IPerson } from '../../store/modules/types';

const Form: React.FC = () => {

    const [ data, setData ] = useState<IPerson>({} as IPerson);

    const dispatch = useDispatch();

    const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(addNewPerson(data));
        alert('Cadastro enviado!');
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    placeholder="name"
                    required
                    onChange={e => setData({ ...data, name: e.target.value })} />
                <input 
                    type="email" 
                    placeholder="Email"
                    required
                    onChange={e => setData({ ...data, email: e.target.value })} />
                <input 
                    type="submit" 
                    value="Cadastrar" />
            </form>
        </div>
    );
}

export default Form;