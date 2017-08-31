function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId)
  }, -1) + 1
}

let todoReucer = (todos = [], action) => {
  switch (action.type) {
    case "ADD_TODO":
      return [
        {
          text: action.text,
          id: getId(todos)
        },
        ...todos
      ]

    case "DELETE_TODO":
      return todos.filter((todo) => {
        return todo.id !== action.id
      })

    default:
      return todos;
  }
}

export default todoReucer;