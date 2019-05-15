import React from 'react'
import Reminder from './Reminder'

class RemindersBoard extends React.Component {

  state = {
    reminders: []
  }

  render() {

    return (
      <section className="app-body">
        <Reminder content="buy toilet paper" />
        <Reminder content="pay the internet bills" />
        <Reminder content="beat candy crush level 89 to get bonus jewels" />
        <Reminder content="review Nico's lecture on rails server for this app" />
        <Reminder content="buy flowers to apologize for any potential misdemeanors this week" />
        <Reminder content="implement codenames" />
      </section>
    )
  }
}

export default RemindersBoard
       
       
       
       
       
       
       
       
       
       
       

