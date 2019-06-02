import React, { Component } from 'react'
import './App.css'
import Form from './Form'
import RemindersBoard from './RemindersBoard'

class App extends Component {

  state = {
    newReminder: {
      content: "",
      due: "",
      categories: [],
      complete: false
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const selectedCategories = []
    const allOptions = event.currentTarget[1].options

    for (let i = 0; i < allOptions.length; i++) {
      if (allOptions[i].selected) {
        selectedCategories.push(allOptions[i].value)
      }
    }

    const newReminder = {
      id: 99,
      content: event.currentTarget[0].value,
      due: "2019-05-21T00:00:00",
      categories: selectedCategories
    }
    this.setState({newReminder})
    console.log(newReminder)
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>reminders</h1>
        </header>
        
        <Form handleSubmit={this.handleSubmit}/>
        <RemindersBoard newReminder={this.state.newReminder}/>
      </div>
    );
  }
}

export default App
