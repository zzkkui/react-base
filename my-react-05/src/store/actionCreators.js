import {CHANGE_INPUT_VALUE, SUBMIT_INPUT_VALUE, DELETE_ITEM } from './actionType';

export const getInputChangeAction = (value) => ({
  type: CHANGE_INPUT_VALUE,
  value
});

export const getAddTodoItem = () => ({
  type: SUBMIT_INPUT_VALUE
});

export const getDeleteTodoItem= (index) => ({
  type: DELETE_ITEM,
  value: index
});

//没有redux-thunk 创建action只能是对象
// export const initTodoListAction= (data) => ({
//   type: INIT_TODOLIST_ACTION,
//   value: data
// });

// export const getInitList = () => ({
//   type: GET_INIT_LIST
// })