const Sequelize = require("sequelize")
const db = require("../database/db.js")
// const sequelize = require('sequelize');
require('sequelize-hierarchy')(Sequelize);
// const Sequelize = require('sequelize-hierarchy')();

module.exports = db.sequelize.define(
    'category', {
    title: Sequelize.STRING,
    parent_id: {
      type: Sequelize.INTEGER,
      hierarchy: true
      }
    },
    {
      timestamps: false
    }
  );