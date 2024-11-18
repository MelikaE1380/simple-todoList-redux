import { combineReducers } from "@reduxjs/toolkit";
import  todoReducer  from "./todoReducer/todoReducer";

export const combinedReducers = combineReducers ({
    todo: todoReducer
})