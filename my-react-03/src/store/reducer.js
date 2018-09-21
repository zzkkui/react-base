import uuid from 'uuid';
import { CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM, INIT_TODOLIST_ACTION } from './actionTypes';

const defaultState = {
  inputValue: '',
  list: []
}

//reducer 可以接受state，但不能修改state
export default (state = defaultState, action) => {
  if(action.type === CHANGE_INPUT_VALUE) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.inputValue = action.value
    return newState
  }
  if(action.type === ADD_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list.push({
      id: uuid(),
      value: state.inputValue
    })
    newState.inputValue = ''
    // console.log(newState)
    return newState
  }
  if(action.type === DELETE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    
    const index = newState.list.findIndex((item) => {
      return action.value === item.id
    })
    newState.list.splice(index, 1)
    return newState
  }
  if(action.type === INIT_TODOLIST_ACTION) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.list = action.value
    return newState
  }
  return state
}