import React, { Component } from 'react'
import './App.css'
import Form from './Form'
import RemindersBoard from './RemindersBoard'
import API from './API'


class App extends Component {

  state = {
    reminders: [],
    form: {
      shown: false,
      content: '',
      dueDate: '',
      categories: []
    }
  }

  componentDidMount() {
    API.getReminders()
      .then(reminders => this.setState({ reminders }))
  }

  completeReminder = reminderId => {
    const reminders = this.state.reminders.filter(reminder => reminder.id !== reminderId)
    this.setState({ reminders })
  }

  handleSubmit = event => {
    event.preventDefault()
    const { content, dueDate,  } = this.state.form
    const newReminder = { content, dueDate }
    this.createReminder(newReminder)
  }

  createReminder = reminder => {
    console.log("reminder created:", reminder)
  }

  handleFormContent = event => {
    const form = { ...this.state.form, content: "" }
    this.setState({ form })
  }

  handleFormCategories = event => {
    this.setState({ form: { ...this.state.form, categories: [] } })
  }

  toggleForm = () => {
    const shown = !this.state.form.shown
    const form = { ...this.state.form, shown }
    this.setState({ form })
  }

  render() {
    const { reminders, form } = this.state
    const {
      handleSubmit,
      handleFormCategories,
      handleFormContent,
      toggleForm,
      completeReminder
    } = this

    return (
      <div className="App">
        <header className="App-header">
          <h1>reminders</h1>
        </header>
        {
          form.shown
            ? <Form
              handleSubmit={handleSubmit}
              handleFormContent={handleFormContent}
              handleFormCategories={handleFormCategories}
              shown={form.shown}
              toggleForm={toggleForm}
            />
            : <button className="btn btn-warning btn-lg" onClick={toggleForm}>Add new</button>
        }
        <RemindersBoard
          reminders={reminders}
          completeReminder={completeReminder}
        />
      </div>
    )
  }
}

export default App
