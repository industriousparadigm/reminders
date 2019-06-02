import React from 'react'

const Reminder = props => {

  // const timeLeft = () => {
  //   const now = new Date()
  //   const deadline = new Date(this.props.reminder.dueDate)
  //   const daysToGo = (deadline - now) / 86400000

  //   if (daysToGo >= 1) {
  //     return `${Math.round(daysToGo)} days`
  //   } else if (daysToGo < 1) {
  //     return `${Math.round(daysToGo * 24)} ${daysToGo * 24 < 2 ? "hour" : "hours"}`
  //   } else if (daysToGo * 24 < 1) {
  //     return "Less than 1h"
  //   } else {
  //     return "EXPIRED"
  //   }
  // }

  const { id, content, categories } = props.reminder

  return (
    <div className="reminder-card card bg-light mb-3">
      <div className="card-body">
        <h5 className="card-title">{content}</h5>
        {/* <span className="badge badge-pill badge-danger">{this.timeLeft()}</span> */}
        {/* <p className="card-text"><small className="text-muted">{categories.join(", ")}</small></p> */}
        <button className="btn btn-success" onClick={() => props.completeReminder(id)}>
          Done
          </button>
      </div>
    </div>
  )
}

export default Reminder