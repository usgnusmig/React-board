const Sequelize = require("sequelize");

module.exports = class Post extends Sequelize.Model {
  static init(sequelize) {
    return super.init(
      {
        title: {
          type: Sequelize.STRING(100),
          allowNull: false,
        },
        content: {
          type: Sequelize.TEXT,
          allowNull: false,
        },
      },
      {
        sequelize,
        timestamp: true,
        modelName: "Post",
        tableName: "Posts",
        paranoid: "utf8mb4",
        collate: "utf8mb4_general_ci",
      }
    );
  }
};
