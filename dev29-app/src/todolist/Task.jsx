import React from 'react';
import TodoForm from './todoForm';
// function Task({ task }){

function Task(props) {
  // const task = props.task;
  const { task, onDelete, onEdit } = props;
  const [showForm, setForm] = React.useState(false);
  const { name } = task;

  function handleDelete() {
    onDelete(name);
  }

  function handleEdit() {
    setForm(true);
  }

  function handleCancel() {
    setForm(false);
  }

  function handleSave(params) {
    onEdit(name, params);
    setForm(false);
  }


  return (
    <section className="taskCmpt">
      {showForm && <TodoForm onSave={handleSave} onCancel={handleCancel} value={name} />}
      {!showForm && (
        <div className="task">
          {name}
          <div className="actions">
            <button type="button" onClick={handleEdit}>Edit</button>
            <button type="button" onClick={handleDelete}>Delete</button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Task;
