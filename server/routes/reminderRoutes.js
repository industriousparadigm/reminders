const Reminder = require("../models").Reminder;
const Category = require("../models").Category;

module.exports = function(router) {
  router.get("/reminders", (req, res) => {
    Reminder.findAll({
      include: [Category]
    })
      .then(reminders => {
        res.json(reminders);
      })
      .catch(err => res.json(err));
  });

  router.get("/reminders/:id", (req, res) => {
    Reminder.findAll({
      where: { id: req.params.id }
    })
      .then(reminder => {
        res.json(reminder[0]);
      })
      .catch(err => res.json(err));
  });

  router.post("/reminders", (req, res) => {
    Reminder.create({
      name: req.body.name
    })
      .then(res => {
        res.json(res);
      })
      .catch(err => res.json(err));
  });

  router.put("/reminders/:id", (req, res) => {
    Reminder.update({ name: req.body.name }, { where: { id: req.params.id } })
      .then(updatedReminder => {
        res.json(updatedReminder);
      })
      .catch(err => res.json(err));
  });

  router.delete("/reminders/:id", (req, res) => {
    Reminder.destroy({
      where: { id: req.params.id }
    })
      .then(reminder => {
        res.json(reminder);
      })
      .catch(err => res.json(err));
  });
};
