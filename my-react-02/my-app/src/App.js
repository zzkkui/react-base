import React, { Component, Fragment } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import './style.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: '',
      list: []
    }
    this.handleInputChange = this.handleInputChange.bind(this)
    this.handleAddItem = this.handleAddItem.bind(this)
    this.handleDeleteItem = this.handleDeleteItem.bind(this)
  }

  render() {
    return (
      <Fragment> 
        <label htmlFor="insertArea">输入内容</label>
        {/* 下面是一个input框 */}
        <input
          id="insertArea"
          value={this.state.inputValue}
          onChange={this.handleInputChange}/>       
        <TransitionGroup>
        {
          this.state.list.map((item) => {
            return (
              <CSSTransition
                // in={this.state.show}
                classNames={'fade'}
                timeout={1000}
                unmountOnExit
                appear={true}
                key={item.id}
                onEntered={(el) => { el.style.color = 'blue' }}
              >
                <li onClick={() => this.handleDeleteItem(item.id)}>{item.value}</li>
              </CSSTransition>   
            )         
          })
        }
        </TransitionGroup>
        
        {/* <div className={this.state.show ?  'show' : 'hide'}>Hello World</div> */}
        <button onClick={this.handleAddItem}>add</button>
      </Fragment>     
    );
  }

  //生成uid
  guid() {
    function S4() {
      return (((1+Math.random())*0x10000)|0).toString(16).substring(1);
    }
    return (S4()+S4()+"-"+S4()+"-"+S4()+"-"+S4()+"-"+S4()+S4()+S4());
  }

  handleInputChange(e) {
    const value = e.target.value;
    this.setState(() => ({
      inputValue: value
    }))
  }

  handleAddItem() {
    if(this.state.inputValue) {
      this.setState((prevState) => ({
        list: [...prevState.list, {id: this.guid(), value: this.state.inputValue}],
        inputValue: ''
      }))
    }   
  }
  handleDeleteItem(id) {
    this.setState((prevState) => {
      const list = [...prevState.list];
      const index = list.findIndex((item) => (
        item.id === id
      ));
      list.splice(index, 1);
      return {list}
    })
  }

}

export default App;
