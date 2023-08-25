import { useEffect, useState } from "react"
import Modal from "./Modal";
import ToDoLi from "./ToDoLi";
import ToDoIn from "./ToDoIn";
import OpenDoneToDo from "./OpenDoneToDo";


function App() {
  const savedToDos = JSON.parse(localStorage.getItem('toDos'));
  const savedDoneToDos = JSON.parse(localStorage.getItem('doneToDos'));
  const [doneToDos, setDoneToDos] = useState(savedDoneToDos);
  const [toDos, setToDos] = useState(savedToDos);
  const [modalOpen, setModalOpen] = useState(false);
  const [openDone, setOpenDone] = useState(false);

  const toggleDoneList = () => {
    setOpenDone(current => !current);
  }

  const toggleModal = () => {
    setModalOpen(current => !current);
  }

  useEffect(() => {
    {toDos === null ?
      localStorage.setItem('toDos', JSON.stringify([]))
    : localStorage.setItem("toDos", JSON.stringify(savedToDos))}
    }, []);
  useEffect(() => {
    {doneToDos === null ?
      localStorage.setItem('doneToDos', JSON.stringify([]))
    : localStorage.setItem("doneToDos", JSON.stringify(savedDoneToDos))}
    }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target[0].value === ""){
      setModalOpen(true);
    }else{
      localStorage.setItem("toDos", JSON.stringify([...toDos, e.target[0].value]));
      setToDos([...toDos, e.target[0].value]);
      e.target[0].value=null;
    }
  }

  const handleDone = (e, toDos, index) => {
    const newToDos = toDos.filter((toDo)=> toDo !== toDos[index]);
    localStorage.setItem("toDos", JSON.stringify(newToDos));
    setToDos(newToDos);

    const newDoneToDos = [...doneToDos, e.target.parentElement.firstChild.data];
    localStorage.setItem("doneToDos", JSON.stringify(newDoneToDos));
    setDoneToDos(newDoneToDos);
  }

  const handleDelete = (e, doneToDos, index) => {
    const newDoneToDos = doneToDos.filter((doneToDo)=> doneToDo !== doneToDos[index]);
    localStorage.setItem("doneToDos", JSON.stringify(newDoneToDos));
    setDoneToDos(newDoneToDos);
  }

  return (
    <div>
      <h1>ToDo List</h1>
      <Modal show={modalOpen} onClose={toggleModal}/>
      <ToDoIn show={!openDone} handleSubmit={handleSubmit}/>
      <OpenDoneToDo show={openDone} doneToDos={doneToDos} handleDelete={handleDelete} toggleDoneList={toggleDoneList}/>
      <ToDoLi show={!openDone} toDos={toDos} handleDone={handleDone}/>
    </div>
  );
}

export default App;