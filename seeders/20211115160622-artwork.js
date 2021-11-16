"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "artworks",
      [
        {
          title: "Mona Lisa Bean",
          imageUrl:
            "https://scontent-iev1-1.xx.fbcdn.net/v/t1.18169-9/18033127_1334890296564966_5759988737109609730_n.jpg?_nc_cat=102&ccb=1-5&_nc_sid=9267fe&_nc_ohc=BAjClfcSFboAX-UB6vi&_nc_ht=scontent-iev1-1.xx&oh=5d73a8e6633f4cac19e1a228f0e412e6&oe=61B940B7",
          hearts: 96,
          userId: 1,
          minimunBid: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Night Watch",
          imageUrl:
            "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Fichef.bbci.co.uk%2Fnews%2F976%2Fcpsprodpb%2F1268E%2Fproduction%2F_119060457_0b8dc1cc-9085-4f95-8a51-37ea1241f83d.jpg",
          hearts: 154,
          userId: 1,
          minimunBid: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          title: "Van Gogh",
          imageUrl:
            "https://slack-imgs.com/?c=1&o1=ro&url=https%3A%2F%2Finteresnyefakty.org%2Fwp-content%2Fuploads%2FVinsent-van-Gog.jpg",
          hearts: 200,
          userId: 1,
          minimunBid: 0,
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("artworks", null, {});
  },
};
