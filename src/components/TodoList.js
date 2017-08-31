import React from 'react';
import TodoItem from './TodoItem'

class TodoList extends React.Component {

  render() {
    return (

      <div>
        <ul>
          {this
            .props
            .todos
            .map((todo) => {
              return  <TodoItem key={todo.id} actions = {this.props.actions} todo = {todo}/>
             
            })
}

        </ul>
      </div>
    )
  }

}

export default TodoList;
