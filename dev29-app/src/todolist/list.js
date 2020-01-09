import React  from 'react'
import Task from './Task'
const List = ({tasks,onDelete, onEdit}) => {


    return (  
      <section className='listCmpt'>
        lista
        {
            tasks.map((task, index) =>{
          return (
            <Task key={index} task={task} onDelete={onDelete} onEdit ={onEdit} />
           );
          })
        }
      </section>
    )
  }
   
  export default List;