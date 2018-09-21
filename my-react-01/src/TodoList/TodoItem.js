import React, { Component } from 'react';
import PropTypes from 'prop-types';

class TodoItem extends Component {

  constructor(props) {
    super(props)
    // 会节约性能
    this.handleClick = this.handleClick.bind(this)
  }

  render() {
    const {content, test} = this.props
    // console.log('child render');
    //当父组件render函数运行时，子组件的render函数也会重新运行一次
    return (
      <div onClick={this.handleClick}>
        {test} - {content}
      </div>
    )
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log(nextProps,nextState,nextContext)
    if(nextProps.content !== this.props.content) {
      return true;
    }else{
      return false;
    }     
  }

  //一个组件要从父组件接受参数
  //如果这个组件第一次存在父组件中，不会被执行
  //如果这个组件之前已经存在于父组件中，才会被执行
  componentWillReceiveProps(nextProps) {
    // console.log(nextProps);
    // console.log('child componentWillReceiveProps');
  }
  
  componentWillUnmount() {
    // console.log('child componentWillUnmount');
  }
  

  handleClick() {
    const {deleteItem, index} = this.props
    deleteItem(index)
  }
}

TodoItem.propTypes = {
  test: PropTypes.string.isRequired,
  content: PropTypes.arrayOf(PropTypes.number, PropTypes.string),
  deleteItem: PropTypes.func,
  index: PropTypes.number
}

TodoItem.defaultProps = {
  test: 'hello world'
}

export default TodoItem