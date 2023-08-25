import React from 'react'

const OpenDoneToDo = ({show, doneToDos, handleDelete, toggleDoneList}) => {
    if(!show) {
        return (
            <div>
                <h3>This is Todo list</h3>
                <h5><button onClick={() => toggleDoneList()}>Show Done ToDo</button></h5>
            </div>
        )
    }
    
    return (
        <div>
            <h3>This is Done Todo list</h3>
            <h5><button onClick={() => toggleDoneList()}>Hide Done ToDo</button></h5>
            <ul>
            {(doneToDos === null) ? null
            :doneToDos.map((doneToDo, index) => {
                return <li key={index}>{doneToDo}    <button onClick={(e) => handleDelete(e, doneToDos, index)}>Delete!</button></li>
            })}
            </ul>
        </div>
    )
}

export default OpenDoneToDo