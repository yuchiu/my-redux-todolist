let actions = {

    addTodo : (text)=>{
        return {
            type: 'ADD_TODO',
            text : text
        }
    },
    deleteTodo: (id)=>{
        return {
            type: 'DELETE_TODO',
            id: id

        }
    }
}

export default actions;