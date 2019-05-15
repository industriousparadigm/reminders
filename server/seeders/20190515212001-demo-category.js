'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('Categories', [{
      name: 'home'      
    },
    {
      name: 'supermarket'
    },
    {
      name: 'school'
    },
    {
      name: 'family'
    },
    {
      name: 'work'
    },
    {
      name: 'supermarket'
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
