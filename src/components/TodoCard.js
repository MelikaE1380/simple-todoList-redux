import { useDispatch } from "react-redux";
import { deleteTodo , editTodo} from "../redux/reducers/todoReducer/todoReducer";


function TodoCard({ text, id }) {
  

  const dispatch = useDispatch();

  function deleteClickHandler() {
    
    dispatch(deleteTodo(id));
  }
  function editClickHandler(){
    console.log(text);   // تودو اضافه شده
    let editText = prompt('enter edited task',text);
    
    
      dispatch(editTodo({id,editText}));
    
  }

  return (
    <div>
      <span>{text}</span>
      <br />
      <button onClick={deleteClickHandler}>delete</button>
      <br />
      <button onClick={editClickHandler}>edit</button>
      <hr />
    </div>

  )
}


export default TodoCard;