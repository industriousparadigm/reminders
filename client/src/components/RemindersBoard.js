import React from 'react'
import Reminder from './Reminder'

const RemindersBoard = props => {
  const { reminders, completeReminder } = props

  const displayReminders = () =>
    reminders.map(reminder =>
      !reminder.complete && <Reminder key={reminder.id} reminder={reminder} completeReminder={completeReminder} />
    )

  return (
    <section className="app-body">
      {displayReminders()}
    </section>
  )
}

export default RemindersBoard



       
       
       
       
       
       
       
       
       
       

