import React, { Component } from 'react'

class Reminder extends Component {
  render() { 
    return (
      <div className="reminder-card card bg-light mb-3">
        <div className="card-body">
          <h5 className="card-title">{this.props.content}</h5>
          <span className="badge badge-pill badge-danger">48h left</span>
          <p className="card-text"><small className="text-muted">home, supermarket</small></p>
          <button className="btn btn-success">
            Done
          </button>
        </div>
      </div>
    )
  }
}

export default Reminder