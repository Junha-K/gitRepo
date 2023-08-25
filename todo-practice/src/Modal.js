import React from 'react'

const Modal = ({show, onClose}) => {
  if(!show) {
    return null;
  }
  return (
    <div>
        <span>Please fill in the blank and push the "add" button   </span>
        <button onClick={onClose}>
            close
        </button>
    </div>
  )
}

export default Modal