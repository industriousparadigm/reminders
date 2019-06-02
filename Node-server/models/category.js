'use strict';
module.exports = (sequelize, DataTypes) => {
  const Category = sequelize.define('Category', {
    name: DataTypes.STRING
  }, {});
  Category.associate = function(models) {
    Category.belongsToMany(models.Reminder, { through: "Categorization", foreignKey: "categoryId" })
  };
  return Category;
};