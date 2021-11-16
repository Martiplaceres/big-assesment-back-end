"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class artwork extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      artwork.belongsTo(models.user);
      artwork.hasMany(models.bid);
    }
  }
  artwork.init(
    {
      title: DataTypes.STRING,
      imageUrl: DataTypes.STRING,
      hearts: DataTypes.INTEGER,
      minimunBid: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "artwork",
    }
  );
  return artwork;
};
