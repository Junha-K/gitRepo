import { useEffect, useState } from "react"
import Modal from "./Modal";
import ToDoLi from "./ToDoLi";
import ToDoIn from "./ToDoIn";
import OpenDoneToDo from "./OpenDoneToDo";
import OptionIn from "./OptionIn";


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
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedTodo, setSelectedTodo] = useState({});

  //새로고침할 때 localstorage.getItem 하면 null 나와서 mapping 에러나는 문제 해결하려고 강제로 "[]" 입력
  useEffect(() => {
    {toDos === null ? localStorage.setItem('toDos', JSON.stringify([])) : localStorage.setItem('toDos', JSON.stringify(toDos))};
    {doneToDos === null ? localStorage.setItem('doneToDos', JSON.stringify([])) : localStorage.setItem('doneToDos', JSON.stringify(doneToDos))};
    if(options === null){
      localStorage.setItem('options', JSON.stringify([{"id":0,"value":"Add a Category"}]));
      setOptions(JSON.stringify([{"id":0,"value":"Add a Category"}]));
    }else{
      localStorage.setItem('options', JSON.stringify(options))
    };
    }, []);

  const handleFilter = (e) => {
    e.preventDefault();
    const newToDos = toDos.filter((toDo) => toDo.category === selectedOption);
    setToDos(newToDos);
  }

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  }

  const handleOptionAdd = (e) => {
    e.preventDefault();
    
    if (newOptionValue.trim() !== '') {
      const newOptions = [...options, {id: e.timeStamp, value: newOptionValue}];
      setOptions(newOptions);
      localStorage.setItem("options", JSON.stringify(newOptions));
      setNewOptionValue('');
    }
  }

    //handleDelete와 합칠 수 있을 듯
  const handleOptionDelete = (e) => {
    e.preventDefault();
    // console.log(formData.entries());
    const newOptions = options.filter((option)=> option.value !== selectedOption)
    localStorage.setItem("options", JSON.stringify(newOptions));
    setOptions(newOptions);
  }
  

  const toggleDoneList = () => {
    setOpenDone(current => !current);
  }

  const toggleModal = () => {
    setModalOpen(current => !current);
  }

  const handleSubmit = (e) => {
    e.preventDefault();

    if(e.target[0].value === ""){
      setModalOpen(true);
    }else{
      if(toDos === null){
        const newToDos = [{ id: e.timeStamp, category: selectedOption, value: e.target[0].value }];
        localStorage.setItem("toDos", JSON.stringify(newToDos));
        setToDos(newToDos);
        e.target[0].value=null;
      }else{
        const newToDos = [...toDos, { id: e.timeStamp, category: selectedOption, value: e.target[0].value }];
        localStorage.setItem("toDos", JSON.stringify(newToDos));
        setToDos(newToDos);
        e.target[0].value=null;
      }
    }
  }

  const handleDone = (e, id) => {
    console.log(e);
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
      <h1>AAA List</h1>
      <Modal show={modalOpen} onClose={toggleModal}/>
      <OptionIn 
        show={!openDone}
        options={options}
        setToDos={setToDos}
        newOptionValue={newOptionValue} 
        setNewOptionValue={setNewOptionValue}
        handleOptionAdd={handleOptionAdd}
        handleOptionDelete={handleOptionDelete}
        handleFilter={handleFilter}
        handleSelectChange={handleSelectChange}
      />
      <ToDoIn 
        show={!openDone} 
        handleSubmit={handleSubmit}
      />
      <OpenDoneToDo 
        show={openDone} 
        doneToDos={doneToDos} 
        handleDelete={handleDelete} 
        toggleDoneList={toggleDoneList}
        />
      <ToDoLi 
        show={!openDone} 
        toDos={toDos} 
        handleDone={handleDone}
      />
    </div>
  );
}

export default App;