import {connect} from 'react-redux'
import {useRef} from 'react'
import List from './List'
import {handleAddGoal, handleDeleteGoal} from '../actions/goals'

const Goals = (props) => {
    const inputRef = useRef();
    const addItem = (e) => {
        e.preventDefault();
        const name = inputRef.current.value;
        props.dispatch(handleAddGoal(name, () => inputRef.current.value = ""))

    }

    const removeGoalItem = (goal) => {
        props.dispatch(handleDeleteGoal(goal))
    }

    return <div>
        <h1>Goal List</h1>
        <input type='text' placeholder='Add goal' ref={inputRef} />
        <button onClick={addItem}>Add Goal</button>
        <List items={props.goals} removeItem={removeGoalItem} />
    </div>
}

export default connect((state) => ({
    goals: state.goals
}))(Goals)