import React from 'react';

class TodoInput extends React.Component {

  constructor() {
    super();
    this.state = {
      inputText: ''
    }
  }

  handleChange(e) {
    this.setState({inputText: e.target.value});

  }

  handleSubmit(e) {
    e.preventDefault();
    this.setState({inputText: ''});
    this.props.actions.addTodo(this.state.inputText);
  }

  render() {
    return (
      <div>
        <form onSubmit={this
          .handleSubmit
          .bind(this)}>
          <input
            type="text"
            placeholder="add to list"
            value={this.state.inputText}
            onChange={this
            .handleChange
            .bind(this)}/>
          <input type="submit" value="Add"/>

        </form>
      </div>
    )
  }

}
export default TodoInput;