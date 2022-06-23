import React from 'react'
import TodoList from './components/TodoList';
function App() {
  const [todos, setTodos] = React.useState([
    {id: 1, completed: false, title: 'Buy Bread'},
    {id: 2, completed: true, title: 'Buy Pen'},
    {id: 3, completed: false, title: 'Buy Potatos'}
  ])
  function todoToggle(id) {
    setTodos(
      todos.map(todo => {
        if(todo.id === id) {
          todo.completed = !todo.completed
        }
        console.log(todo);
        return todo
      })
    )
  }
  return (
    <div className="wrapper">
      <h1 className='title-form'>Todo List</h1>
      <form>
        <TodoList todos={todos} todoToggle={todoToggle}/>
      </form>
    </div>
  )
}

export default App;
