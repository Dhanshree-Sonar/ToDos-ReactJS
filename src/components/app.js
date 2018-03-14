import React from "react";
import CreateTodo from './create-todo'
import TodosList from './todos-list';

const todos = [
  {
    task: 'Cook Dinner',
    isCompleted: false
  },
  {
    task: 'Udacity Checkin',
    isCompleted: true
  }
];

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      todos
    };
  }

  render() {
    return (
      <div>
        <h1>Todos</h1>
        <CreateTodo createTask={this.createTask.bind(this)}/>
        <TodosList
          todos={this.state.todos}
          // Pass the functions to TodosList
          toggleTask={this.toggleTask.bind(this)}
          saveTask={this.saveTask.bind(this)}
        />
      </div>
    );
  }

  createTask(task){
    this.state.todos.push({
      task,
      isCompleted: false
    });
    this.setState({ todos: this.state.todos });
  }

  toggleTask(task) {
    // Find a todo to toggle the isCompleted status
    const foundTodo = _.find(this.state.todos, todo => todo.task === task);
    foundTodo.isCompleted = !foundTodo.isCompleted;
    this.setState({ todos: this.state.todos });
  }

  saveTask(oldTask, newTask) {
    const foundTodo = _.find(this.state.todos, todo => todo.task === oldTask);
    foundTodo.task = newTask;
    this.setState({ todos: this.state.todos });
  }
}
