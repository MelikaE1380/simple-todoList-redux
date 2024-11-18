
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { useState } from 'react';
import { addTodo, deleteTodo } from "./redux/reducers/todoReducer/todoReducer";

import TodoCard from './components/TodoCard';


function App() {
  const dispatch = useDispatch();

  const [inputValue, setInputValue] = useState("");

  const todoListX = useSelector(state => state.todo);
  console.log(todoListX);




  function addClickHandler() {
    dispatch(addTodo(inputValue));

    setInputValue("");
  }

 

  return (

    <div>
      {console.log(todoListX)}
      <input placeholder='new task' value={inputValue} onChange={(e) => {
        console.log(e.target.value);
        setInputValue(e.target.value);
      }} />
      <button onClick={addClickHandler}>add</button>

      <div>

      {todoListX.map(item=>

<TodoCard key={item.id}
id={item.id}
text={item.text}

/> 

      )}
      </div>

      <div>

      </div>
    </div>
  );
}

export default App;
