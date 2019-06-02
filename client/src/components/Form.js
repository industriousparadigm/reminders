import React from 'react'

const Form = props => {
  const { shown, toggleForm, handleSubmit } = props

  return (

    <section className="app-body">
      {
        shown && <form className="form-group">
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
          <button type="submit" className="btn btn-warning btn-lg" onClick={handleSubmit}>Submit</button>
          <button className="btn btn-danger btn-lg" onClick={toggleForm}>Back</button>
        </form>
      }
    </section>
  )
}

export default Form