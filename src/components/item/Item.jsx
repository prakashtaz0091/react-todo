import React from 'react'
import './style.css'
const Item = ({ todo, remove, arrange }) => {

  const [done, setDone] = React.useState(false)

  const dateTime = new Date(todo.datetime)


  const handleDone = () => {
    setDone(true)
    arrange(todo)
  }

  const handleDelete = () => {
    remove(todo)
  }

  return (
    <div className={done ? 'todo-item bg-success' : 'todo-item'}>
      <div className="info">
        <h3 className={done ? 'strike-through' : ''} >{todo.title}</h3>
        <span>{dateTime.toDateString()}</span> |
        <span>{dateTime.toLocaleTimeString()}</span>
      </div>
      <div className="controls">
        {!done && <button onClick={handleDone} >Done</button>}
        <button onClick={handleDelete} >Delete</button>
      </div>
    </div>
  )
}

export default Item