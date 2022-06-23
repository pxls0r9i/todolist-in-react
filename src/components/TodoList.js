import React from 'react'
import PropTypes from 'prop-types'
import TodoItem from './TodoItem'

function TodoList(props) {
    return (
        <ul className='todo-list'>
            {props.todos.map((todo, i) => {
               return <TodoItem todo={todo} key={todo.id} index={i} todoToggle={props.todoToggle}/>
            })}
        </ul>
    )
}

TodoList.prototype = {
    todos: PropTypes.arrayOf(PropTypes.object).isRequired,
    todoToggle: PropTypes.func.isRequired
}

export default TodoList