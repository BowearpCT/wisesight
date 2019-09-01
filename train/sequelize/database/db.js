const Sequelize = require("sequelize")
const sequelize = new Sequelize("test", "root", "password" ,{
    host: "localhost",
    dialect: "mysql",
    operatorsAliases: false,
    pool: {
        max: 5,
        min: 0,
        accquire: 30000,
        idle: 10000
    }
})
// db.sequelize.models.FolderAncestor.sync();

const db = {}
db.sequelize = sequelize
db.Sequelize = Sequelize
// accountModel.hasMany(labelingModel)




module.exports = db 