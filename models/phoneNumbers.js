module.exports = (sequelize, DataTypes) => {
 const PhoneNumbers = sequelize.define("PhoneNumbers", {
  id: {
   type: Sequelize.INTEGER,
   autoIncrement: true,
   primaryKey: true
 }
})
PhoneNumbers.associate = (models) => {
 PhoneNumbers.belongsTo(models.Employees, {
  foreignKey: {
   allowNull: false
  }
 })
}
return PhoneNumbers
}