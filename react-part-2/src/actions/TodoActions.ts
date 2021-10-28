import { ICounterAction, ITodoItem } from "../interface";

export const addTodo = (todo: ITodoItem): ICounterAction => ({
    type: "ADD_TODO",
    payload: todo
});

export const removerTodo = (id: string): ICounterAction => ({
    type: "DELETE_TODO",
    payload: id
});