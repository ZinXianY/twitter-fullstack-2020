'use strict';
module.exports = (sequelize, DataTypes) => {
  const Tweet = sequelize.define('Tweet', {
    description: DataTypes.TEXT,
    UserId: DataTypes.INTEGER,
    likeCounts: DataTypes.INTEGER,
    replyCounts: DataTypes.INTEGER,
  }, {});
  Tweet.associate = function (models) {
    Tweet.hasMany(models.Reply)
    Tweet.hasMany(models.Like)
    Tweet.belongsTo(models.User)
    Tweet.belongsToMany(models.User, {
      through: models.Like,
      foreignkey: 'TweetId',
      as: 'LikedUsers'
    })
  };
  return Tweet;
};