import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const todoReducer = createSlice({
    name: 'todoReducer',
    initialState: initialState,

    reducers: {

        addTodo: (state, action) => {


            const newTodo = {
                id: Date.now(),
                text: action.payload
            }
            state.push(newTodo);

        },
        deleteTodo: (state, action) => {

            let temp = state.filter(item => item.id !== action.payload);
            return temp;
        },
        editTodo: (state, action) => {
            console.log(action.payload.id);
            console.log(action.payload.editText);

            const temp = state.find(item => item.id == action.payload.id);
            temp.text = action.payload.editText;
            console.log(state);



        }

    }

});

export const { addTodo, deleteTodo, editTodo } = todoReducer.actions;

export default todoReducer.reducer;


