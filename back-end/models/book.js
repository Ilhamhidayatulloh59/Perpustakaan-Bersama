"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
    class Book extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
        // define association here
        }
    }
    Book.init(
        {
            Author: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Title: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Genre: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Publisher: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Sinopsis: {
                type: DataTypes.STRING,
                allowNull: false,
            },
            Images: {
                type: DataTypes.STRING,
                allowNull: false,
            },
        },
        {
        sequelize,
        modelName: "Book",
        }
    );
    return Book;
};