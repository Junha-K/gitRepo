import React from 'react'

const ToDoLi = ({show, toDos, handleDone}) => {
  if(!show) {
    return null;
  }
  return (
    <ul>
    {(toDos === null) ? null
    :toDos.map((toDo, index) => {
      return <li key={index}>{toDo.category !== "" ? toDo.category: null} {toDo.value}    <button onClick={(e) => handleDone(e, toDo.id)}>Done!</button></li>
    })}
    </ul>
  )
}

export default ToDoLi