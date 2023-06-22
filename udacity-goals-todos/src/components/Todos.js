import { connect } from "react-redux";
import List from './List'
import {useRef} from 'react'
import {handleAddTodo, handleDeleteTodo, handleTodoToggle} from '../actions/todos'

const Todos = (props) => {
    const inputRef = useRef()
    const addItem = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        props.dispatch(handleAddTodo(name, () => inputRef.current.value = ""))
    }

    const removeTodoItem = (todo) => {
        props.dispatch(handleDeleteTodo(todo))

    }

    const toggleItem = (id) => {
        props.dispatch(handleTodoToggle(id))
    }
    return <div>
        <h1>Todo List</h1>
        <input type='text' placeholder='Add todo' ref={inputRef} />
        <button onClick={addItem}>Add todo</button>
        <List items={props.todos} removeItem={removeTodoItem} toggleItem={toggleItem} />
    </div>
}

export default connect((state) => ({
    todos: state.todos
}))(Todos)