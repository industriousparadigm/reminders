const Categorization = require("../models").Categorization;
const Reminder = require("../models").Reminder;
const Category = require("../models").Category;

module.exports = function(router) {
  router.get("/categorizations", (req, res) => {
    Categorization.findAll({
      include: [Reminder, Category]
    }).then(categorizations => {
      res.json(categorizations);
    });
  });

  router.get("/categorizations/:id", (req, res) => {
    Categorization.findAll({
      where: { id: req.params.id },
      include: [Reminder, Category]
    }).then(categorization => {
      res.json(categorization[0]);
    });
  });

  router.post("/categorizations", (req, res) => {
    Categorization.create({
      reminderId: req.body.reminderId,
      categoryId: req.body.categoryId
    }).then(res => {
      res.json(res);
    });
  });

  router.put("/categorizations/:id", (req, res) => {
    Categorization.update(
      { reminderId: req.body.reminderId, categoryId: req.body.categoryId },
      { where: { id: req.params.id } }
    )
      .then(updatedCategorization => {
        res.json(updatedCategorization);
      })
      .catch(err => console.log(err));
  });

  router.delete("/categorizations/:id", (req, res) => {
    Categorization.destroy({
      where: { id: req.params.id }
    }).then(categorization => {
      res.json(categorization);
    });
  });
};
