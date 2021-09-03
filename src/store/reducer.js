import {
  GET_ALL_ITEM,
  CHANGE_TODO_ITEM,
  DEL_TODO_ITEM,
  ADD_TODO_ITEM,
  DEL_FINISHED_TODO_ITEM,
  IS_CHECKED_ALL_TODO_ITEM,
} from './actionType'

const defaultState = {
  todos: [
    { id: 1, title: 'react1', finished: false },
    { id: 2, title: 'react2', finished: false },
  ],
  finishedCount: 0,
}
//根据action的type，对state进行相应操作，并返回新的state
const reducerList = (state = defaultState, action) => {
  console.log(state, action)

  //  1 获取todo
  if (action.type === GET_ALL_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    newState.todos = action.todos
    return newState
  }
  // 2.选中与取消选中
  if (action.type === CHANGE_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    let tempFinishedCount = 0
    newState.todos.forEach((todo, index) => {
      if (action.todoId === todo.id) {
        todo.finished = action.isfinished
      }
      if (todo.finished) {
        tempFinishedCount += 1
      }
    })
    // 2.1 返回一个新的状态
    newState.finishedCount = tempFinishedCount
    return newState
  }
  if (action.type === DEL_TODO_ITEM) {
    //  3.删除个todolist
    const newState = JSON.parse(JSON.stringify(state))
    let tempFinishedCount = 0
    newState.todos.forEach((todo, index) => {
      if (action.todoId === todo.id) {
        newState.todos.splice(index, 1)
      }
    })
    //  3.1处理删除某个中选中的
    newState.todos.forEach((todo, index) => {
      if (todo.finished) {
        tempFinishedCount += 1
      }
    })
    // 3.2 返回新状态
    newState.finishedCount = tempFinishedCount
    return newState
  }
  if (action.type === ADD_TODO_ITEM) {
    //  4.0添加todo
    const newState = JSON.parse(JSON.stringify(state))
    newState.todos.push(action.todo)
    return newState
  }
  // 5.0删除所有已经完成的记录
  if (action.type === DEL_FINISHED_TODO_ITEM) {
    const newState = JSON.parse(JSON.stringify(state))
    let tempArr = []
    newState.todos.forEach((todo, index) => {
      // 没有完成的任务
      if (!todo.finished) {
        tempArr.push(todo)
      }
    })
    // 2. 返回新状态
    newState.finishedCount = 0
    newState.todos = tempArr
    return newState
  }
  // 6.0全选与非全选
  if (action.type === IS_CHECKED_ALL_TODO_ITEM) {
    // 6.1. 遍历
    let tempFinishedCount = 0
    const newState = JSON.parse(JSON.stringify(state))
    newState.todos.forEach((todo, index) => {
      todo.finished = action.flag
    })
    // 处理选中的
    newState.todos.forEach((todo, index) => {
      if (todo.finished) {
        tempFinishedCount += 1
      }
    })

    // 6.2. 返回新状态
    newState.finishedCount = tempFinishedCount
    return newState
  }
  return state
}

export default reducerList
