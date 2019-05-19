"use strict";
module.exports = (sequelize, DataTypes) => {
  const Categorization = sequelize.define(
    "Categorization",
    {
      reminderId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER
    },
    {}
  );
  Categorization.associate = function(models) {
    Categorization.belongsTo(models.Reminder);
    Categorization.belongsTo(models.Category);
  };
  return Categorization;
};
