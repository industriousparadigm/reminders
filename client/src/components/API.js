class API {
  static remindersURL = "http://localhost:3017/reminders"

  static getReminders = () =>
    fetch(this.remindersURL)
      .then(resp => resp.json())

  static createReminder = reminder =>
    fetch(this.remindersURL, {
      method: 'POST',
      headers: "",
      body: JSON.stringify(reminder)
    })
      .then(resp => resp.json())

  static updateReminder = reminder =>
    fetch(this.remindersURL + `/${reminder.id}`, {
      method: 'PATCH',
      headers: "",
      body: JSON.stringify(reminder)
    })
      .then(resp => resp.json())

  static destroyReminder = id =>
    fetch(this.remindersURL + `/${id}`, {
      method: 'DELETE'
    })
      .then(resp => resp.json())
}

export default API