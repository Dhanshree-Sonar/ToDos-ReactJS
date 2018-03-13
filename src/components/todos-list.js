import _ from 'lodash';
import React from "react";
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item'

export default class TodosList extends React.Component {
  renderTodos() {
    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index} {...todo} />);
  }

  render() {
    return (
      <table>
        <TodosListHeader />
        <tr>
          {this.renderTodos()}
        </tr>
      </table>
    );
  }
}
