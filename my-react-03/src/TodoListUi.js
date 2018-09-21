import React,  {Fragment} from 'react'
import { Input, Button, List, Icon } from 'antd'

//无状态组件 （组件只有render函数） 性能高
const TodoListUi = (props) => {
  return (
    <Fragment>
      <div style={{marginTop: '10px', marginLeft: '10px'}}>
        <Input value={props.inputValue}
              onChange={props.inputValueChange}
              onKeyUp={props.handleEnterUp}
              placeholder='todo info' 
              style={{width: 300}}/>
        <Button type='primary' onClick={props.handleAddItem}>添加</Button>
          <List
            style={{marginTop: '10px', width: '400px'}}
            bordered
            dataSource={props.list}
            renderItem={(item) => (
                <List.Item style={{position: 'relative'}} >
                  <div>{item.value}</div>
                  <Icon type="delete" 
                        style={{position: 'absolute', right: '10px', top: '18px'}}                  
                        theme="outlined"
                        onClick={() => {props.handleDeleteItem(item.id)}}
                        />
                </List.Item> 
                                
            )}
          /> 
      </div>             
    </Fragment>
  )
}

// class TodoListUi extends Component {
//   render() {
//     return (
//       <Fragment>
//         <div style={{marginTop: '10px', marginLeft: '10px'}}>
//           <Input value={this.props.inputValue}
//                 onChange={this.props.inputValueChange}
//                 onKeyUp={this.props.handleEnterUp}
//                 placeholder='todo info' 
//                 style={{width: 300}}/>
//           <Button type='primary' onClick={this.props.handleAddItem}>添加</Button>
//             <List
//               style={{marginTop: '10px', width: '400px'}}
//               bordered
//               dataSource={this.props.list}
//               renderItem={(item) => (
//                   <List.Item style={{position: 'relative'}} >
//                     <div>{item.value}</div>
//                     <Icon type="delete" 
//                           style={{position: 'absolute', right: '10px', top: '18px'}}                  
//                           theme="outlined"
//                           onClick={() => {this.props.handleDeleteItem(item.id)}}
//                           />
//                   </List.Item> 
                                 
//               )}
//             /> 
//         </div>             
//       </Fragment>
//     )
//   }
// }

export default TodoListUi