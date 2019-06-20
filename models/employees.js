module.exports = (sequelize, DataTypes) => {
 const employee = sequelize.define("Author", {
  id: {
   type: Sequelize.INTEGER,
   autoIncrement: true,
   primaryKey: true
 },
 name: Sequelize.STRING,
 email: Sequelize.STRING
})
 employee.associate = (models) => {
  employees.hasMany(models.phoneNumbers, {
   onDelete: "cascade"
  })
 }
 return employee
}