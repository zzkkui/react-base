import React, { Component } from 'react'

//让组件跟store做连接
import { connect } from 'react-redux'
//import { CHANGE_INPUT_VALUE, SUBMIT_INPUT_VALUE, DELETE_ITEM } from './store/actionType';
import { getInputChangeAction, getAddTodoItem, getDeleteTodoItem } from './store/actionCreators';

const TodoList = (props) => {
  const {inputValue, list, handleChange, handleSubmit, handleDeleteClick} = props
  return (
    <div>
      <div>
        <input 
          value={inputValue}
          onChange={handleChange}/>
        <button onClick={handleSubmit}>提交</button>
      </div>
      <ul>
        {
          list.map((item, index) => {
            return <li onClick={handleDeleteClick} key={index}>{item}</li>
          })
        }
      </ul>
    </div>
  )
}

const mapStateToProps = (state) => ({
  inputValue: state.inputValue,
  list: state.list
})

//store.dispatch(), props
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    handleChange(e) {
      // console.log(e.target.value)
      const action = getInputChangeAction(e.target.value)
      dispatch(action)
    },
    handleSubmit() {
      const action = getAddTodoItem()
      dispatch(action)
    },
    handleDeleteClick(index) {
      const action = getDeleteTodoItem(index)
      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)