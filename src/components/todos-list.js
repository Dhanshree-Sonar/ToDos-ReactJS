import _ from 'lodash';
import React from "react";
import TodosListHeader from './todos-list-header';
import TodosListItem from './todos-list-item'

export default class TodosList extends React.Component {
  renderTodos() {
    // Create props without todos entery which has all the functions passed
    // by app
    const props = _.omit(this.props, 'todos');

    return _.map(this.props.todos, (todo, index) => <TodosListItem key={index}
                  {...todo} {...props}/>);
  }

  render() {
    return (
      <table className="w3-padding w3-panel w3-border w3-border-white">
        <TodosListHeader />
        <tbody>
          {this.renderTodos()}
        </tbody>
      </table>
    );
  }
}
