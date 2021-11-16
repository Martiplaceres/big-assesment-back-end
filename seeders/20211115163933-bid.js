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
          amount: 4000,
          artworkId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "s@s.com",
          amount: 1200,
          artworkId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "ma@re.com",
          amount: 800,
          artworkId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "hello@hello.com",
          amount: 4050,
          artworkId: 1,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "pedro@pedro.com",
          amount: 5600,
          artworkId: 2,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          email: "jjuan@r.com",
          amount: 25000,
          artworkId: 1,
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
