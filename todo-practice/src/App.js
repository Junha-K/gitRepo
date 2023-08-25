import { useEffect, useState } from "react"
import Modal from "./Modal";
import ToDoLi from "./ToDoLi";
import ToDoIn from "./ToDoIn";
import OpenDoneToDo from "./OpenDoneToDo";


function App() {
  const savedToDos = JSON.parse(localStorage.getItem('toDos'));
  const savedDoneToDos = JSON.parse(localStorage.getItem('doneToDos'));
  const savedOptions = JSON.parse(localStorage.getItem('options'));
  
  const [toDos, setToDos] = useState(savedToDos);
  const [doneToDos, setDoneToDos] = useState(savedDoneToDos);
  const [options, setOptions] = useState(savedOptions);

  const [modalOpen, setModalOpen] = useState(false);
  const [openDone, setOpenDone] = useState(false);
  const [newOptionValue, setNewOptionValue] = useState('');

  const handleOptionDelete = (e) => {
    const selectedCategory = e.target.parentElement[0].value;
    const newOptions = options.filter((option)=> option.value !== selectedCategory)
    setOptions(newOptions);
  }
  const handleOptionAdd = (e) => {
    if (newOptionValue.trim() !== '') {
      const newOptions = [...options, {id: e.timeStamp, value: newOptionValue}];
      setOptions(newOptions);
      localStorage.setItem("options", JSON.stringify(newOptions));
      setNewOptionValue('');
    }
  };

  const toggleDoneList = () => {
    setOpenDone(current => !current);
  }

  const toggleModal = () => {
    setModalOpen(current => !current);
  }

  useEffect(() => {
    {toDos === null ? localStorage.setItem('toDos', JSON.stringify([])) : localStorage.setItem('toDos', JSON.stringify(toDos))};
    {doneToDos === null ? localStorage.setItem('doneToDos', JSON.stringify([])) : localStorage.setItem('doneToDos', JSON.stringify(doneToDos))};
    {options === null ? localStorage.setItem('options', JSON.stringify([])) : localStorage.setItem('options', JSON.stringify(options))};
    }, []);
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if(e.target[0].value === ""){
      setModalOpen(true);
    }else{
      if(toDos === null){
        const newToDos = [{ id: e.timeStamp, value: e.target[0].value }];
        localStorage.setItem("toDos", JSON.stringify(newToDos));
        setToDos(newToDos);
        e.target[0].value=null;
      }else{
        const newToDos = [...toDos, { id: e.timeStamp, value: e.target[0].value }];
        localStorage.setItem("toDos", JSON.stringify(newToDos));
        setToDos(newToDos);
        e.target[0].value=null;
      }
      
    }
  }

  const handleDone = (e, id) => {
    const doneToDo = e.target.parentElement.firstChild.data;
    const newToDos = toDos.filter((toDo)=> toDo.id !== id);
    localStorage.setItem("toDos", JSON.stringify(newToDos));
    setToDos(newToDos);

    if(doneToDos === null){
      const newDoneToDos = [{ id: id, value: doneToDo }];
      localStorage.setItem("doneToDos", JSON.stringify(newDoneToDos));
      setDoneToDos(newDoneToDos);
    }else{
      const newDoneToDos = [...doneToDos, { id: id, value: doneToDo }];
      localStorage.setItem("doneToDos", JSON.stringify(newDoneToDos));
      setDoneToDos(newDoneToDos);
    }
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
      <ToDoIn show={!openDone} handleSubmit={handleSubmit} options={options} newOptionValue={newOptionValue} setNewOptionValue={setNewOptionValue} handleOptionAdd={handleOptionAdd} handleOptionDelete={handleOptionDelete}/>
      <OpenDoneToDo show={openDone} doneToDos={doneToDos} handleDelete={handleDelete} toggleDoneList={toggleDoneList}/>
      <ToDoLi show={!openDone} toDos={toDos} handleDone={handleDone}/>
    </div>
  );
}

export default App;