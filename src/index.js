import { render } from '@testing-library/react';
import react from 'react';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function Navbar() {
    return (
        <div className="navbar glass" >
            <span>Todo Bom 2</span>
        </div>
    );
}

class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: ["test", "yo bro", "this is dope"],
        }
    }

    displayTodos() {
        let todos = this.state.todos;
        return todos.map((todo) => <li className='todo glass'>{todo}</li>)
    }

    render() {
        return (
            <ul>
                {this.displayTodos()}
            </ul>
        );
    }
}

class Todo extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            content: this.props.content,
            isDone: this.props.isDone,
        }
    }

    render(){
        return(
            <li className='todo glass'>
                {this.state.content}
            </li>
        )
    }
}


class Page extends React.Component {
    render() {
        return (
            <div>
                <Navbar></Navbar>
                <TodoList></TodoList>
            </div>
        );
    }
}



ReactDOM.render(
    <Page />,
    document.getElementById('root')
);