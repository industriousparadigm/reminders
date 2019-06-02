import React from 'react'
import Reminder from './Reminder'

class RemindersBoard extends React.Component {

  state = {
    reminders: []
  }

  getReminders = () => {
    return fetch("http://localhost:3001/reminders")
      .then(resp => resp.json())
  }

  componentDidMount () {
    this.getReminders()
      .then(reminders =>
        this.setState({ reminders })
      )
  }
  
  displayReminders = () => {
    return this.state.reminders.map(reminder =>
      !reminder.complete && <Reminder key={reminder.id} reminder={reminder} handleClick={this.handleClickDone}/>
    )
  }

  handleClickDone = (reminderId) => {
    const updatedReminders = this.state.reminders
    this.setState({ reminders: updatedReminders.filter(reminder => reminder.id !== reminderId)})
  }

  render() {

    return (
      <section className="app-body">
        {this.displayReminders()}
      </section>
    )
  }
}

export default RemindersBoard
       
       
       
       
       
       
       
       
       
       
       

