import React from 'react'

const ToDoLi = ({show, toDos, handleDone}) => {
  if(!show) {
    return null;
  }
  return (
    <ul>
    {(toDos === null) ? null
    :toDos.map((toDo, index) => {
      return <li key={index}>{toDo}    <button onClick={(e) => handleDone(e, toDos, index)}>Done!</button></li>
    })}
    </ul>
  )
}

export default ToDoLi