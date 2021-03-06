import React from "react";

export default class TodosListItem extends React.Component {
  constructor(props) {
    super(props);
    this.state ={
      isEditing: false
    };
  }

  renderTaskSection() {
    const { task, isCompleted } = this.props;
    const taskStyle = {
      'text-decoration': isCompleted ? 'none' : 'line-through',
      cursor: 'pointer'
    }

    if (this.state.isEditing) {
      return (
        <td>
          <form onSubmit={this.onSaveClick.bind(this)}>
            <input type="text" defaultValue={task} ref="editInput"
            className="w3-margin-right w3-text-indigo w3-input w3-round-large"/>
          </form>
        </td>
      );
    }

    return (
      <td style={taskStyle}
          onClick={this.props.toggleTask.bind(this, task)}
      >
        {task}
      </td>
    );
  }

  renderActionSection() {
    if (this.state.isEditing) {
      return (
        <td>
          <button onClick={this.onSaveClick.bind(this)}
          className="w3-button w3-white w3-text-indigo w3-round-large w3-margin-right">
            Save
          </button>
          <button onClick={this.onCancelClick.bind(this)}
          className="w3-button w3-white w3-text-indigo w3-round-large">
            Cancel
          </button>
        </td>
      );
    }

    return (
      <td>
        <button onClick={this.onEditClick.bind(this)}
        className="w3-button w3-white w3-text-indigo w3-round-large w3-margin-right">
          Edit
        </button>
        <button onClick={this.props.deleteTask.bind(this, this.props.task)}
        className="w3-button w3-white w3-text-indigo w3-round-large">
          Delete
        </button>
      </td>
    );
  }

  onEditClick() {
    this.setState({ isEditing: true });
  }

  onCancelClick() {
    this.setState({ isEditing: false });
  }

  onSaveClick(event) {
    event.preventDefault();

    const oldTask = this.props.task;
    const newTask = this.refs.editInput.value;
    this.props.saveTask(oldTask, newTask);
    this.setState({ isEditing: false });
  }

  render() {
    return (
      <tr>
        {this.renderTaskSection()}
        {this.renderActionSection()}
      </tr>
    );
  }
}
