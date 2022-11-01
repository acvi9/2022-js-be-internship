const {Sequilize, DataTypes} = require('sequelize');
const database = require('../config/db-config');

const Terms = database.define("terms",{
    name: {
        type: DataTypes.STRING,
        allowNull: false
    },
    from: {
        type: DataTypes.DATE,
        allowNull: false
    },
    to: {
        type: DataTypes.DATE,
        allowNull: false
    }
},
{
    timestamps: false
});

module.exports = Terms;