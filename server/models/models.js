const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const Contact = sequelize.define('contact', {
    id: {type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true},
    name: {type: DataTypes.STRING, allowNull: false},
    email: {type: DataTypes.STRING, allowNull: false},
    message: {type: DataTypes.STRING, allowNull: true},
})

module.exports = {
    Contact
}