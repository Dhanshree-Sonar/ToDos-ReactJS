import React from "react";

export default class TodosList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: null
    };
  }

  renderError() {
    if (!this.state.error) {
      return null;
    }

    return (
      <div style={{ color: 'red' }}>
        {this.state.error}
      </div>
    );
  }

  render() {
    return (
      <form onSubmit={this.handleCreate.bind(this)} className="w3-padding">
        <input type="text" placeholder="What do I need to do?" ref="createInput"
        className="w3-margin-right w3-text-indigo w3-input w3-round-large"/>
        <button className="w3-button w3-white w3-text-indigo w3-round-large">Create</button>
        {this.renderError()}
      </form>
    );
  }

  handleCreate(event) {
    event.preventDefault();

    const createInput = this.refs.createInput;
    const task = createInput.value;
    const validateInput = this.validateInput(task);

    if (validateInput) {
      this.setState({ error: validateInput });
      return null;
    }

    this.setState({ error: null });
    this.props.createTask(task);
    this.refs.createInput.value = '';
  }

  validateInput(task) {
    if (!task) {
      return 'Please enter a task!';
    } else if (_.find(this.props.todos, todo => todo.task === task)) {
      return 'The task already exists!';
    } else {
      return null;
    }
  }
}
