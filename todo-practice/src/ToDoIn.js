import React from 'react'

const ToDoIn = ({show, handleSubmit, options, newOptionValue, setNewOptionValue, handleOptionAdd, handleOptionDelete}) => {
  if(!show) {
    return null;
  }

  const onCategorySub = (e) => {
    e.preventDefault();
  }

  const handleCategoryIn = (e) => {
    if(e.target.value.length <= 20){
      setNewOptionValue(e.target.value);
    }
  }
  

  return (
    <div>
      <form onSubmit={onCategorySub}>
        <label htmlFor="category">Category:  </label>
          <select id="category" name="category">
            { options === null ? null 
            : options.map((option, index) => (
                <option key={index} value={option.value}>{option.value}</option>
            ))}
          </select>
          <button onClick={handleOptionDelete}>Delete</button>
          
          <input
            type="text"
            value={newOptionValue}
            onChange={handleCategoryIn}
            placeholder='write a category'
          />
          <button onClick={handleOptionAdd}>Add a category</button>
      </form>
      <form onSubmit={handleSubmit}>
        <input 
          type="text"
          placeholder="write your to do"
        />
        <button>add</button>
      </form>
    </div>
  )
}

export default ToDoIn