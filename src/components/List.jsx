import React, { Component } from 'react'
import Item from '../components/Item'
import store from '../store/index'
import {
  getDelItemAction,
  getChangeItemFinishedAction,
} from '../store/actionCreator'
export default class List extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
    store.subscribe(this.hanstorechange)
  }

  hanstorechange = () => {
    this.setState(store.getState)
  }
  render() {
    //这里的状态数据来源于store
    const { todos } = this.state
    return (
      <div id="root">
        <div className="todo-container">
          <div className="todo-wrap">
            {todos.map((todo, index) => (
              <Item
                todo={todo}
                key={index}
                getDelItemAction={getDelItemAction}
                getChangeItemFinishedAction={getChangeItemFinishedAction}
              />
            ))}
          </div>
        </div>
      </div>
    )
  }
}
