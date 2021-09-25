import React from "react";
import ReactDOM from "react-dom";
import TextField from "@mui/material/TextField";
import "./index.css";

function Navbar() {
  return (
    <div className="navbar glass">
      <span>Todo Bom 2</span>
    </div>
  );
}

class TodoList extends React.Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
    // this.addTodo = this.addTodo.bind(this);
  }

  displayTodos() {
    let todos = this.state.todos;
    return todos.map((todo) => <Todo content={todo}></Todo>);
  }

  addTodo(text) {
    console.log("addTodo -> TodoList Component");
    console.warn(this.state);
    let arr = this.state.todos;
    arr.push(text);
    this.setState({
      todos: arr,
    });
  }

  render() {
    return (
      <div>
        <ul>{this.displayTodos()}</ul>
        <Inputter passedFunction={this.addTodo.bind(this)}></Inputter>
      </div>
    );
  }
}
class Inputter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      passedFunction: this.props.passedFunction,
    };
    this.state.passedFunction = this.state.passedFunction.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  addTodo() {
    let text = this.state.value;
    this.state.passedFunction(text);
    this.setState({ value: " " });
  }

  render() {
    return (
      <div className="input-div">
        {/* <input
          value={this.state.value}
          onChange={(event) => this.handleChange(event)}
          id="input"
          className="Input-text glass"
          placeholder="Input your task!"
        ></input> */}

        <TextField
          id="outlined-basic"
          label="Input your task"
          variant="outlined"
          value={this.state.value}
          onChange={(event) => this.handleChange(event)}
        />

        <button className="imported-button" onClick={this.addTodo.bind(this)}>
          Add
        </button>
      </div>
    );
  }
}

class Todo extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: this.props.content,
      isDone: false,
    };
  }

  MarkAsDone() {
    console.log("damn daniel");
  }

  render() {
    return (
      <li className="todo glass">
        <span>{this.state.content}</span>
        <button className="imported-button" onClick={() => this.MarkAsDone()}>
          Done
        </button>
      </li>
    );
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

ReactDOM.render(<Page />, document.getElementById("root"));
