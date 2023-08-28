import React from 'react'

const ToDoIn = ({show, handleSubmit}) => {
  if(!show) {
    return null;
  }

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="write your to do"
        />
        <button type="submit">add</button>
      </form>
    </div>
  )
}

export default ToDoIn