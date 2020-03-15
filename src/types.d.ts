export type TodoType = {
    text: string, 
    completed: boolean,
}

export type CompleteTodoType = (todo:TodoType) => void;

export type AddTodo =  (todo:string) => void

export type TodoStatType = {
    todo:number;
    done:number;
}