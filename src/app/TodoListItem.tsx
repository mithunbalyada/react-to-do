import React from 'react';
import {TodoType, CompleteTodoType} from '../types';
import './Todo.css';

interface TodoListItemProps{
    todo:TodoType;
    completeTodo: CompleteTodoType;
}

export const TodoListItem:React.FC<TodoListItemProps> = ({todo, completeTodo}) =>{

    return(
        <div>
            <input type='checkbox' checked={todo.completed} onChange={() => completeTodo(todo)}/> {' '}
            <label className={todo.completed ? "completed" : undefined}>{todo.text}</label>
        </div>
    );
} 