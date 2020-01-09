import actions from './action'; //es un objeto que tiene funciones dentro
//ESTRUCTURA DE REDUCER
//STORE POR CONTEXTO
export const initialState = {
    user:{
        name:'rodolfo',
        age: 25
    },
    tasks:[]
}

function updateTask(state, payload){
     console.log('todoList::::', payload.task);
     const newTasks = [...state.tasks];
     const task1 = newTasks.find(task => task.name === payload.name);
     task1.name = payload.task.name;


     return {...state, tasks: newTasks};
}

function createTask(state, task){
    console.log('createee tasskk');
    const newTask = [...state.tasks];
    newTask.push(task);
    return {...state, tasks: newTask};
}

function deleteTask(state, name){
    console.log('task eliminada...', name);

    const newTask = [...state.tasks];
    const index = newTask.findIndex(task => task.name === name);
    newTask.splice(index,1);

    return {...state, tasks: newTask};
}

export default function globalRducer(state, action){
    const {payload} = action;

    switch(action.type){
      case(actions.UPDATE().type):
        return updateTask(state, payload);
      case(actions.CREATE().type):
        return createTask(state, payload);
      case(actions.DELETE().type):
        return deleteTask(state, payload);
      default:
          return state;
    }
}