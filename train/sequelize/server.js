var express = require('express')
var app = express()
var bodyParser = require("body-parser")
var cors = require("cors")
var port = 3100


const Sequelize = require('sequelize-hierarchy')();
const categoryModel = require("./model/category")
// sequelize.models.categoryModelAncestor.sync();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

categoryModel.belongsTo(categoryModel, {as: 'parent', foreignKey: 'parentId'})
categoryModel.hasMany(categoryModel, {as: 'children', foreignKey: 'parentId'})
categoryModel.belongsToMany(categoryModel, {as: 'descendents', foreignKey: 'ancestorId', through: categoryModelAncestor})
categoryModel.belongsToMany(categoryModel, {as: 'ancestors', foreignKey: 'categoryModelId', through: categoryModelAncestor})
// await sequelize.models.categoryModelAncestor.sync();
app.get('/',  (req, res) => {
    categoryModel.findOne({hierarchy:true})
    .then(categories => {
        res.send(categories)
    })
    .catch(err => {
        res.send(err)
    })
})
// app.listen(port, () => console.log(`Example app listening on port ${port}!`))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))