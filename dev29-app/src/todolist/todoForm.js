import React, {useState} from 'react';
const TodoForm = (props) => {
const {onCancel, onSave, value} = props;
const [text, setText] = useState(value);
  

  function handleChange(event) {
    const value = event.target.value;
    setText(value);
  }

  function handleSave(event) {
    
    onSave({name: text});
    setText('');
   
  }

  
 
  function handleKeypress(event){
   // console.log(event.keyCode);
    const ENTER_KEY = 13;
    if(event.keyCode === ENTER_KEY){
        handleSave();
    }
  }
  
  return (  
    <div className='todoFormCmpt'>
      <label>title</label>
      <input value={text} type='text' onChange={handleChange} onKeyDown={handleKeypress}/>
      <div className ="actions">
        <button onClick={handleSave} disabled = {!text}>Save</button>
        <button onClick={onCancel}>Cancel</button>
      </div>
    </div>
  );
}
 
export default TodoForm;