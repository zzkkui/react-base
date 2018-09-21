import React, {Component, Fragment} from 'react';
import '../style.css'
import TodoItem from './TodoItem';
import axios from 'axios';

class TodoList extends Component {

  constructor(props) {
    super(props);
    //当组件的state和props发生改变的时候，render函数就会重新执行
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleButtonClick = this.handleButtonClick.bind(this)
    this.handleDeleteClick = this.handleDeleteClick.bind(this)
  }

  componentWillMount() {
    // console.log('componentWillMount')
  }
  
  render() {
    // console.log('parent render');
    //JSX -> React.createElement -> JS对象 -> 真实的DOM
    return (
      <Fragment>       
        <div>
          <label htmlFor="insertArea">输入内容</label>
          {/* 下面是一个input框 */}
          <input
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            // ref={(input) => {this.input = input}}
            onChange={this.handleInputChange}/>
          <button onClick={this.handleButtonClick}>提交</button>
        </div>
        <ul>
          {this.getTodoItem()}
        </ul>
      </Fragment>     
    );
  }

  //ajax放在 componentDidMount 里面
  componentDidMount() {
    axios.get('/api/todolist').then((res) => {
      console.log(res)
      this.setState(() => ({
        list: [...res.data]      
      }))
    }).catch((err) => {
      console.log(err)
    })
    // console.log('componentDidMount')
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    // console.log('shouldComponentUpdate');
    return true;
  }

  componentWillUpdate() {
    // console.log('componentWillUpdate');
  }
  
  componentDidUpdate(prevProps, prevState) {
    // console.log('componentDidUpdate');
  }

  getTodoItem() {
    return this.state.list.map((item, index) => {
      return (
        <TodoItem 
          key={index}
          content={item}
          index={index}
          deleteItem={this.handleDeleteClick}/>          
      )
    })
  }

  handleInputChange(e) {
    const value = e.target.value;
    //setState 是异步的， （提高性能）
    this.setState(() => ({
      //异步需要先保存值
      inputValue: value
    }))

    // //有ref （用来直接获取页面的dom）
    // const value = this.input.value;
    // //setState 是异步的， （提高性能）
    // this.setState(() => ({
    //   //异步需要先保存值
    //   inputValue: value
    // }))
  }

  handleButtonClick() {
    if(this.state.inputValue) {
      this.setState((prevState) => ({
        list: [...prevState.list, prevState.inputValue],
        inputValue: ''
      }), () => {
        //回调
      })
    }
  }

  handleDeleteClick(index) {
    //immutable
    //state 不允许我们做任何改变（不直接改，可以拷贝副本来进行修改）   
    this.setState((prevState) => {
      const list = [...prevState.list];
      list.splice(index, 1);
      return {list}
    })
  }
}

export default TodoList;