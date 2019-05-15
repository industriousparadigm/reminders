import React from 'react'

// import categories from '../categories'


class Form extends React.Component {

  state = {
    reminderContent: "",
    selectedCategories: []
  }

  handleCategories = event => {
    const selectedCategories = []
    const allOptions = event.target.options

    for (let i = 0; i < allOptions.length; i++) {
      if (allOptions[i].selected) {
        selectedCategories.push(allOptions[i])
      }
    }

    this.setState({ selectedCategories })
    
  }

  render() {
    return (
      <section className="app-body">
        <form className="form-group">
          <div className="form-group mb-2 input-align">
            <textarea className="form-control" id="input-reminder" rows="2" placeholder="type reminder here"></textarea>
          </div>
          <div className="form-group mb-2 input-align">
            <select multiple className="form-control" id="input-category" onChange={this.handleCategories}>
              <option>home</option>
              <option>supermarket</option>
              <option>work</option>
              <option>school</option>
              <option>family</option>
              <option>friends</option>
              <option>church</option>
            </select>
          </div>
          <button type="button" id="add-btn" className="btn btn-warning btn-lg" onClick={this.props.handleClick} data-toggle="modal" data-target="#exampleModal">Post reminder</button>
        </form>
      </section>
    )
  }
}

export default Form