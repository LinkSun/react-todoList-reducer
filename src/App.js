import React, { Component } from 'react'
import './App.css'
import Foot from './components/Foot'
import Head from './components/Head'
import List from './components/List'
export default class App extends Component {
  render() {
    return (
      <div id="root">
        <div className="todo-container">
          <div className="todo-wrap">
            <Head />
            <List />
            <Foot />
          </div>
        </div>
      </div>
    )
  }
}
