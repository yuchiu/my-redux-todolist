import React from 'react';

class TodoItem extends React.Component {

  handleDelete() {
    this
      .props
      .actions
      .deleteTodo(this.props.todo.id);
  }

  render() {
    return (
      <li >
        {this.props.todo.text}
        <button onClick={this
          .handleDelete
          .bind(this)}>
          Delete
        </button>
      </li>

    )
  }
}

export default TodoItem;
