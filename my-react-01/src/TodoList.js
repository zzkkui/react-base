import React, {Component, Fragment} from 'react';
import './style.css'

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      list: []
    }
  }

  render() {
    return (
      <Fragment>
        <div>
          <label htmlFor="insertArea">输入内容</label>
          {/* 下面是一个input框 */}
          <input
            id="insertArea"
            className='input'
            value={this.state.inputValue}
            onChange={this.handleInputChange.bind(this)}/>
          <button 
            onClick={this.handleButtonClick.bind(this)}>
            提交
          </button>
        </div>
        <ul>
          {
            this.state.list.map((item, index) => {
              return (
                <li key={index}>
                  {/* dangerouslySetInnerHTML设置text 不能还有子节点 */}
                  <div className='liText' dangerouslySetInnerHTML={{__html: item}}></div>
                  <button 
                    onClick={this.handleDeleteClick.bind(this, index)}>
                    删除
                  </button>
                </li>
              )
            })
          }
        </ul>
      </Fragment>     
    );
  }

  handleInputChange(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleButtonClick() {
    if(this.state.inputValue) {
      this.setState({
        list: [...this.state.list, this.state.inputValue],
        inputValue: ''
      })
    }
  }

  handleDeleteClick(index) {
    //immutable
    //state 不允许我们做任何改变（不直接改，可以拷贝副本来进行修改）

    const list = [...this.state.list];
    list.splice(index, 1);
    this.setState({
      list: list
    })
  }
}

export default TodoList;