import React, { useState, ChangeEvent, FormEvent } from 'react';
import { AddTodo } from '../types';
import { Form, Button, Row, Col } from 'react-bootstrap';

interface AddTodoFormProps{
    addNewTodo: AddTodo
}


export const AddTodoForm: React.FC<AddTodoFormProps> = ({addNewTodo}) => {

    const[newTodo, setNewTodo] = useState<string>('');

    const changeHandler =(event:ChangeEvent<HTMLInputElement>) =>{
        setNewTodo(event.target.value);
    }

    const addTask =(event:FormEvent<HTMLButtonElement>) =>{
        event.preventDefault();
        addNewTodo(newTodo);
        setNewTodo("");
    }

    return (
        <>
            <Form>
                <Row>
                    <Col sm={8}>
                        <Form.Control type="text" placeholder="Add todos..." onChange={changeHandler} value={newTodo} />
                        <Form.Text className="text-muted">
                            What's on your mind..?
                        </Form.Text>
                    </Col>
                    <Col sm={2}>
                        <Button variant="primary" type="submit" onClick={addTask}>
                            Add
                        </Button>
                    </Col>
                </Row>
            </Form>
        </>
    );
}