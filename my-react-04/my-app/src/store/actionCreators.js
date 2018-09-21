
import axios from 'axios';
import {GET_INIT_LIST, CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODOLIST_ACTION } from './actionTypes';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddTodoItem = () => ({
  type: ADD_TODO_ITEM
});

export const getDeleteTodoItem= (id) => ({
  type: DELETE_TODO_ITEM,
  value: id
});

//没有redux-thunk 创建action只能是对象
export const initTodoListAction= (data) => ({
  type: INIT_TODOLIST_ACTION,
  value: data
});

export const getInitList = () => ({
  type: GET_INIT_LIST
})
