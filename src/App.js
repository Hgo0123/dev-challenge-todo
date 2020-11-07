
import './App.css';
import { useState } from 'react';

import Title from './Components/Title/Title';
import List from './Components/List/List';
import Input from './Components/Input/Input';
import Choice from './Components/Choice/Choice';
import DeleteAll from './Components/DeleteAll/DeleteAll';





function App() {

  const [todo, setTodo ] = useState([])
  const [filter, setFilter ] = useState('')


  function addTodo(str) {
    setTodo([
      ...todo,
      {
        id: todo.length,
        text: str,
        active: true
      }
    ]);
  }

  function toggleActive(id, active) {
    const item = todo.filter(item => item.id === id)
    item.active = active
    setTodo([
      ...todo,
    ],
    item)
  }

  function handleFilter(value) {
    setFilter(value)
  }

  function handleDelete(id) {
    const newTableau = todo.splice(id, 1)
    setTodo([
      ...todo,
    ],
    newTableau)
  }

  function handleDeleteAll() {
    const newTableau = todo.length = 0
    setTodo([
      ...todo,
    ],
    newTableau)
  }

  if(filter === null || filter.length === 0){
   var newList = todo
  } else {
    var newList = todo.filter(item => item.active === eval(filter))
  }
  

  return (
    <div className="App">
        <Title />
        <Choice handleFilter={handleFilter} filter={filter}/>
        <List todo={newList} toggleActive={toggleActive} handleDelete={handleDelete} filter={filter}/>
        <div className="condi">
        {eval(filter) || filter === null || filter === '' ?  <Input addTodo={addTodo}/> : <DeleteAll handleDeleteAll={handleDeleteAll}/>}
        </div>
    </div>
  );
}

export default App;
