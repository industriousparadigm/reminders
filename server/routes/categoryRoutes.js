const Reminder = require("../models").Reminder;
const Category = require("../models").Category;

module.exports = function(router) {
  router.get("/categories", (req, res) => {
    Category.findAll({
      include: [Reminder]
    })
      .then(categories => {
        res.json(categories);
      })
      .catch(err => res.json(err));
  });

  router.get("/categories/:id", (req, res) => {
    Category.findAll({
      where: { id: req.params.id }
    })
      .then(category => {
        res.json(category[0]);
      })
      .catch(err => res.json(err));
  });

  router.post("/categories", (req, res) => {
    Category.create({
      name: req.body.name
    })
      .then(res => {
        res.json(res);
      })
      .catch(err => res.json(err));
  });

  router.put("/categories/:id", (req, res) => {
    Category.update({ name: req.body.name }, { where: { id: req.params.id } })
      .then(updatedCategory => {
        res.json(updatedCategory);
      })
      .catch(err => res.json(err));
  });

  router.delete("/categories/:id", (req, res) => {
    Category.destroy({
      where: { id: req.params.id }
    })
      .then(category => {
        res.json(category);
      })
      .catch(err => res.json(err));
  });
};
