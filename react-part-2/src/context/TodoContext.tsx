import React, { useReducer, createContext, useState } from 'react';
import { IContextModel, ITodos, ICounterAction } from '../interface';

const defaultState: ITodos = {
    todos: []
}

const reducer = ( state: ITodos, action: ICounterAction ) => {
    switch(action.type){
        case 'ADD_TODO':
            return {
                ...state,
                todos: [ ...state.todos, action.payload ]
            };
        case 'DELETE_TODO':
            return {
                ...state,
                todos: state.todos.filter((item) => item.id !== action.payload )
            };
        default:
            // Remove { }
            return state
    }
}

export const Context = createContext({} as IContextModel);

export const Provider: React.FC = ( { children } ) => {
    const [ state, dispatch ] = useReducer(reducer, defaultState);
    return(
        <Context.Provider value={{state, dispatch}}>
            { children }
        </Context.Provider>
    )
}