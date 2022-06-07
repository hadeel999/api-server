'use strict';

const clothes = (sequelize, DataTypes) =>
    sequelize.define("clothes", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        size: {
            type: DataTypes.STRING,
            allowNull: true,
          },

        price: {
            type: DataTypes.FLOAT,
        },
              
    },{ 
        sequelize,
        tableName: 'clothes',
        timestamps: false,
        });

module.exports = clothes;