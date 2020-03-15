import React from 'react';
import {Badge, Row, Col } from 'react-bootstrap';
import { TodoType } from '../types';

interface TodoStatProps{
    todos: Array<TodoType>;
}


export const TodoStat: React.FC<TodoStatProps> =({todos}) =>{

    const total = todos.length;
    const total_done = todos.filter(todo =>todo.completed).length

    return(
        <React.Fragment>

                <Row >
                    <Col md={3}>
                        <div className="alert alert-primary">
                            <span> TODO </span>
                            <Badge variant="light">{total - total_done}</Badge>
                        </div>
                    </Col>
                    <Col md={3}>
                        <div className={total_done === 0 ? "alert alert-danger" : "alert alert-success"}>
                            <span> DONE </span>
                            <Badge variant={"light"}>{total_done}</Badge>
                        </div>

                    </Col>
                </Row>
        </React.Fragment>
    );
}