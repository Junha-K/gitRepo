import React from 'react'

const ToDoIn = ({show, handleSubmit}) => {
  if(!show) {
    return null;
  }
  return (
    <form onSubmit={handleSubmit}>
        <input type="text" placeholder="write your to do"></input>
        <button>add</button>
    </form>
  )
}

export default ToDoIn