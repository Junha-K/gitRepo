import React from 'react'



const OptionIn = ({show, options, setToDos, newOptionValue, setNewOptionValue, handleOptionAdd, handleOptionDelete, handleFilter, handleSelectChange}) => {
    if(!show) {
        return null;
      }
    
    const handleCategoryIn = (e) => {
        if(e.target.value.length <= 20){
            setNewOptionValue(e.target.value);
        }
    }
    const handleRemoveFilter = () => {
        const savedToDos = JSON.parse(localStorage.getItem('toDos'));
        setToDos(savedToDos);
    }

  return (
    <div>
        <form  method="post" onSubmit={handleOptionAdd}>
            <label htmlFor="category">Category:  
                <select id="category" name="category" defaultValue="Todo" onChange={handleSelectChange}>
                    { options === null ? null 
                    : options.map((option, index) => (
                        <option key={index} value={option.value}>{option.value}</option>
                    ))}
                </select>
                
                <input
                    type="text"
                    value={newOptionValue}
                    onChange={handleCategoryIn}
                    placeholder='write a category'
                />
                <button type="submit">
                    Add a category
                </button>
            </label>
        </form>
        <button onClick={handleOptionDelete}>
            Delete a category
        </button>
        <button onClick={handleFilter}>
            Filter
        </button>
        <button onClick={handleRemoveFilter}>
            Remove Filter
        </button>
    </div>
  )
}

export default OptionIn