import React, { Component } from 'react'

import store from './../store'
import {
  getDelItemAction,
  getChangeItemFinishedAction,
} from './../store/actionCreator'
export default class item extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isShowDelBtn: false,
    }
  }
  render() {
    const { todo } = this.props
    //状态来源于store
    const { isShowDelBtn } = this.state
    return (
      <div>
        <ul className="todo-main">
          <li
            onMouseOver={() => this._hasShowBtn(true)}
            onMouseOut={() => this._hasShowBtn(false)}
          >
            <label>
              <input
                type="checkbox"
                checked={todo.finished}
                onChange={() => this.dealChange(todo.id, !todo.finished)}
              />
              <span>{todo.title}</span>
            </label>
            <button
              className="btn btn-warning"
              style={{ display: isShowDelBtn ? 'block' : 'none' }}
              onClick={() => this._dealRemove(todo.id)}
            >
              删除
            </button>
          </li>
        </ul>
      </div>
    )
  }
  // 控制删除按钮的显示和隐藏
  _hasShowBtn(flag) {
    this.setState({
      isShowDelBtn: flag,
    })
  }

  _dealRemove(todoId) {
    const action = getDelItemAction(todoId)
    store.dispatch(action)
  }
  dealChange(todoId, flag) {
    const action = getChangeItemFinishedAction(todoId, flag)
    store.dispatch(action)
  }
}
