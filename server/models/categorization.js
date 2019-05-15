'use strict';
module.exports = (sequelize, DataTypes) => {
  const Categorization = sequelize.define('Categorization', {
    reminder_id: DataTypes.INTEGER,
    category_id: DataTypes.INTEGER
  }, {});
  Categorization.associate = function(models) {
    Categorization.belongsTo(models.Reminder)
    Categorization.belongsTo(models.Category)
  };
  return Categorization;
};