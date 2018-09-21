import React, {Component} from 'react';
// import uuid from 'uuid';
import store from './store/index';
// import {  CHANGE_INPUT_VALUE, ADD_TODO_ITEM, DELETE_TODO_ITEM } from './store/actionTypes';
import {getInputChangeAction, getAddTodoItem, getDeleteTodoItem, getTodoList} from './store/actionCreators';
import TodoListUi from './TodoListUi';
import 'antd/dist/antd.css';
// import axios from 'axios';
// import './style.css';

// const data = [
//   { id: uuid(), value: 'Buy eggs' },
//   { id: uuid(), value: 'Pay bills' },
//   { id: uuid(), value: 'Invite friends over' },
//   { id: uuid(), value: 'Fix the TV' },
// ]

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: store.getState().inputValue,
      list: store.getState().list
    }   
    this.inputValueChange = this.inputValueChange.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleEnterUp = this.handleEnterUp.bind(this)
    this.handleStoreChange = this.handleStoreChange.bind(this)
    store.subscribe(this.handleStoreChange)
  }

  render() {
    return (
      <TodoListUi 
        inputValue={this.state.inputValue}
        list={this.state.list}
        inputValueChange={this.inputValueChange}
        handleEnterUp={this.handleEnterUp}
        handleDeleteItem={this.handleDeleteItem}
        handleAddItem={this.handleAddItem}
        /> 
    )
  }

  componentDidMount() {
    const action = getTodoList();
    store.dispatch(action)
    // axios.get('/todoList').then((res) => {
    //   const action = initTodoListAction(res.data);
    //   store.dispatch(action);
    // }).catch(() => {})
  }
  

  inputValueChange(e) {

    // const action = {
    //   type: CHANGE_INPUT_VALUE,
    //   value: e.target.value
    // };
    const action = getInputChangeAction(e.target.value)
    store.dispatch(action);
    
    // const value = e.target.value;
    // this.setState(() => ({
    //   inputValue: value
    // }))
  }

  handleAddItem() {

    if(this.state.inputValue) {
      // const action = {
      //   type: ADD_TODO_ITEM,
      // };
      const action = getAddTodoItem();
      store.dispatch(action);
    }  

    // if(this.state.inputValue) {
    //   this.setState((prevState) => ({
    //     list: [...prevState.list, {id: uuid(), value: this.state.inputValue}],
    //     inputValue: '',
    //   }))
    // }
  }

  handleEnterUp(e) {
    //回车键
    if(e.keyCode === 13) {
      this.handleAddItem()
    }
  }

  handleDeleteItem(id) {

    // const action = {
    //   type: DELETE_TODO_ITEM,
    //   value: id
    // };
    const action = getDeleteTodoItem(id)
    store.dispatch(action);

    // this.setState((prevState) => {
    //   const list = [...prevState.list]
    //   const index = list.findIndex((item) => (
    //     item.id === id
    //   ))
    //   list.splice(index, 1)
    //   return {list}
    // })
  }

  handleStoreChange() {
    this.setState(store.getState())
  }

}

export default TodoList