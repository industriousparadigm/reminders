import React, { Component } from 'react'
import './App.css'
import Form from './Form'
import RemindersBoard from './RemindersBoard'

class App extends Component {

  state = {

  }

  handleClick = () => {
    console.log("button was clicked yo")
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>reminders</h1>
        </header>
        
        <Form handleClick={this.handleClick}/>
        <RemindersBoard />
      </div>
    );
  }
}

export default App
