import React from 'react';
import { TodoListItem } from './TodoListItem';
import {TodoType, CompleteTodoType} from '../types'


interface TodoListProps{
    todos:Array<TodoType>;
    completeTodo: CompleteTodoType;
}


export const TodoList:React.FC<TodoListProps> = ({todos, completeTodo}) =>{
    
    const list = todos.map(todo => (<TodoListItem key = {todo.text} todo={todo} completeTodo={completeTodo}/>))

    return(
        <>
            {list}
        </>
    );
}