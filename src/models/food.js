'use strict';

const food = (sequelize, DataTypes) =>
    sequelize.define("food", {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
 
        components: {
            type: DataTypes.STRING,
            allowNull: false,
        },

        cost: {
            type: DataTypes.FLOAT,
        }
    },{
        sequelize,
        tableName: 'food',
        timestamps: false,
        });

module.exports = food;