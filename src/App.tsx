import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import { Container, Row, Col, Jumbotron } from 'react-bootstrap';
import {Header} from './components/Navbar';
import { TodoList } from './app/TodoList';
import {AddTodoForm} from './app/AddTodoForm';
import {TodoType, CompleteTodoType, AddTodo} from './types';
import { TodoStat } from './app/TodoStat';


const initialTodos:Array<TodoType> = [
  {text:'Walk the dog', completed:true},
  {text:'Run an errand', completed:false}
];

const App: React.FC = () => { 

  const [todos, setTodos] = useState<Array<TodoType>>(initialTodos);

  const completeTodo: CompleteTodoType = (selectedTodo) =>{
    const updatedTodos:Array<TodoType> = todos.map(todo => {
      if (todo === selectedTodo) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
    setTodos(updatedTodos);
  }

  const addNewTodo: AddTodo = (newTodo) =>{
    newTodo.trim() !== '' && 
    setTodos([...todos, {text:newTodo, completed:false}]);
  }
  


  return (
    <React.Fragment> 
      <Container>
        <Row className="justify-content-md-center">
          <Col md="8">
          <Header/>
          <br />
          <TodoStat todos={todos}/>
            <Jumbotron>
                
                <TodoList todos={todos} completeTodo={completeTodo}/>
                <AddTodoForm addNewTodo={addNewTodo} />
            </Jumbotron>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
}

export default App;
