"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "bids",
      [
        {
          email: "r@r.com",
          amount: 20000,
          artworkId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "r@p.com",
          amount: 4500,
          artworkId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "r@r.com",
          amount: 12350,
          artworkId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "r@r.com",
          amount: 45000,
          artworkId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("bids", null, {});
  },
};
