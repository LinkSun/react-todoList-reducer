import React, { Component } from 'react'
import store from './../store'
import { getAddItemAction } from './../store/actionCreator'
export default class Head extends Component {
  constructor(props) {
    super(props)
    this.myInput = React.createRef()
    this.state = store.getState()
    store.subscribe(this.hanstorechange)
  }

  addItem(e) {
    const { todos } = this.state
    const lastTodoId = todos.length === 0 ? 0 : todos[todos.length - 1].id
    if (e.keyCode === 13) {
      if (!this.myInput.current.value) {
        alert('输入不能为空')
        return
      }
      const todo = {
        id: lastTodoId + 1,
        title: this.myInput.current.value,
        finished: false,
      }
      const action = getAddItemAction(todo)
      store.dispatch(action)
      this.myInput.current.value = ''
    }
  }
  render() {
    return (
      <div>
        <input
          type="text"
          ref={this.myInput}
          placeholder="请输入你的任务名称，按回车键确认"
          onKeyDown={(e) => this.addItem(e)}
        />
      </div>
    )
  }
  hanstorechange = () => {
    this.setState(store.getState)
  }
}
