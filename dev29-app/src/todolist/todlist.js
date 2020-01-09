import React, {useState, useContext} from 'react';
import List  from './list'
import TodoForm from './todoForm'
import GlobalContext from '../Context/global/index'

const TodoList = () => {
  const [state, dispath, actions] = useContext(GlobalContext);

  const [showForm, setShowForm] = useState(false);
  const {tasks} = state;
  console.log(state, dispath, actions);
   

     //const [showForm, setShowForm] = useState(false);
    // const [tasks, setTasks] = useState([]);
  
    function handleAdd(event) {
      setShowForm(true);
    }
  
    function handleCancel() {
      setShowForm(false);
    }
  
    function handleSave(task) {
      //const newTasks = [...tasks, {...task}]
      dispath(actions.CREATE(task))
      //setTasks(newTasks);
    }
  
    // const algo = <TodoList /> && showForm; algo e= <TodoList />
    // const algo = showForm && <TodoList />; algo e= true
    // const algo = showForm || <TodoList />; algo e= true
    // const algo = <TodoList /> || showForm ; algo e= <TodoList />
  
    function handleDelete(name){
      dispath(actions.DELETE(name));
        // const newTask = [...tasks];
        // const index = newTask.findIndex(task => task.name === name);
        // newTask.splice(index,1);


        //setTasks(newTask);
    }

    function handleEdit(name, task){
      dispath(actions.UPDATE({name,task}));
        // console.log('todoList::::', task);
        // const newTasks = [...tasks];
        // const task1 = newTasks.find(task => task.name === name);
        // task1.name = task.name;
        
    }

    return (  
      <div className='todoListCmpt'>
        <button onClick={handleAdd}>Add to do</button>
        { showForm && <TodoForm onCancel={handleCancel} onSave={handleSave}/>}
        <List onEdit = {handleEdit} tasks={tasks} onDelete={handleDelete}/>
      </div>
    );
  }
   
export default TodoList;