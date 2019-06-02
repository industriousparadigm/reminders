import React from 'react'

// import categories from '../categories'


class Form extends React.Component {

  state = {
    reminderContent: "",
    selectedCategories: []
  }

  render() {
    return (
      <section className="app-body">
        <form className="form-group" onSubmit={this.props.handleSubmit}>
          <div className="form-group mb-2 input-align">
            <textarea className="form-control" id="input-reminder" rows="2" placeholder="type reminder here"></textarea>
          </div>
          <div className="form-group mb-2 input-align">
            <select multiple className="form-control" id="input-category">
              <option>home</option>
              <option>supermarket</option>
              <option>work</option>
              <option>school</option>
              <option>family</option>
              <option>friends</option>
              <option>church</option>
              <option>finance</option>
            </select>
          </div>
          <button type="submit" id="add-btn" className="btn btn-warning btn-lg">Post reminder</button>
        </form>
      </section>
    )
  }
}

export default Form