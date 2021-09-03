import React, { Component } from 'react'
import store from './../store'
import {
  getRemoveFinishedItemAction,
  getIsCheckedAllAction,
} from './../store/actionCreator'
export default class foot extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.hanstorechange)
  }
  dealClick = () => {
    const action = getRemoveFinishedItemAction()
    store.dispatch(action)
  }
  dealCheck = (flag) => {
    const action = getIsCheckedAllAction(flag)
    store.dispatch(action)
  }
  render() {
    const { finishedCount, todos } = this.state
    return (
      <div className="todo-footer">
        <label>
          <input
            type="checkbox"
            checked={todos.length > 0 && finishedCount === todos.length}
            onChange={() => this.dealCheck(finishedCount !== todos.length)}
          />
        </label>
        <span>
          <span>已完成{finishedCount}</span> / 全部{todos.length}
        </span>
        <button className="btn btn-danger" onClick={() => this.dealClick()}>
          清除已完成任务
        </button>
      </div>
    )
  }
  hanstorechange = () => {
    this.setState(store.getState)
  }
}
