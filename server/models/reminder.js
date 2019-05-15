'use strict';
module.exports = (sequelize, DataTypes) => {
  const Reminder = sequelize.define('Reminder', {
    content: DataTypes.STRING,
    due: DataTypes.DATE
  }, {});
  Reminder.associate = function(models) {
    Reminder.belongsToMany(models.Category, { through: "Categorization" })
  };
  return Reminder;
};