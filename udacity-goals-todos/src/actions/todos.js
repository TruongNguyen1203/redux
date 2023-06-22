import API from 'goals-todos-api'

export const ADD_TODO = "ADD_TODO";
export const REMOVE_TODO = "REMOVE_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";


export function handleDeleteTodo(todo) {
    return (dispatch) => {
        dispatch(removeTodoAction(todo.id))

        return API.deleteTodo(todo.id).catch(() => {
            dispatch(addTodoAction(todo))
            alert('Error occured. Try again!')
        })
    }
}

export function handleAddTodo(name, cb) {
    return (dispatch) => {
        return API.saveTodo(name).then((todo) => {
            dispatch(addTodoAction(todo))
            cb();
        }).catch(() => alert('Error ocurred. Try again!'))
    }
}

export function handleTodoToggle(id) {
    return (dispatch) => {
        dispatch(toggleTodoAction(id))
        return API.saveTodoToggle(id).catch(() => {
            dispatch(toggleTodoAction(id))
            alert('Error occured. Try again!')

        })
    }
}


function addTodoAction(todo) {
    return {
        type: ADD_TODO,
        todo,
    };
}

function toggleTodoAction(id) {
    return {
        type: TOGGLE_TODO,
        id,
    };
}

function removeTodoAction(id) {
    return {
        type: REMOVE_TODO,
        id,
    };
}
