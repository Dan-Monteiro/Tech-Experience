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
        <div className="container-form">
            <form className="col form" onSubmit={handleSubmit}>
                <input
                    style={{marginBottom: 10}}
                    type="text" 
                    placeholder="name"
                    required
                    onChange={e => setData({ ...data, name: e.target.value })} />
                <input 
                    type="email" 
                    placeholder="Email"
                    required
                    onChange={e => setData({ ...data, email: e.target.value })} />
                <button 
                    type="submit">
                    Cadastrar
                </button>
                <button 
                    type="reset">
                    Limpar
                </button>
            </form>
        </div>
    );
}

export default Form;