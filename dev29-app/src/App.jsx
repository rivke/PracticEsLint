import React from 'react';
import './App.css';
import ToDolist from './todolist/todlist';
import GlobalProvider from './Context/global/Provider';

function App() {
// para que todo lo use
 return (
   <GlobalProvider>   
    <ToDolist />
   </GlobalProvider>
  );
}

export default App;
