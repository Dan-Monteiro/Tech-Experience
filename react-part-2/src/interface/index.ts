import React from 'react';

export type ICounterAction = 
| {
    type: 'ADD_TODO',
    payload: ITodoItem
} 
| {
    type: 'DELETE_TODO',
    payload: string
};

export interface ITodoItem {
    id: string;
    title: string;
    active: boolean;
}

export interface ITodos {
    todos: ITodoItem[];
}

export interface IContextModel {
    state: ITodos;
    dispatch: React.Dispatch<ICounterAction>
}