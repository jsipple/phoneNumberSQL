const mysql = require("mysql")
const express = require("express")
const Sequelize = require("sequelize")
const app = express();
const PORT = process.env.PORT || 8080
const Sequelize = new Sequelize( "People", "root", "1234", {
 host: "localhost",
 port: 3306,
 dailect: "mysql",
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  }
})
const db = require('./models')
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`app listening on PORT ${PORT}`)
  })
})
connection.connect((err) => {
 if (err) throw err
 console.log("connected as id " + connection.threadId + "\n")
  getEmployee("Joe")
  // addNumber("emerygencyNumber", "(919) 324-2321", "Joe")
})
const addNumber = (phoneName, number, employeeID) => {
  connection.query(`ALTER TABLE phoneNumbers SET ${phoneName} VARCHAR(50);UPDATE phoneNumbers SET ${phoneName} = ${number} WHERE employeeID=${employeeID}`)
}
const getEmployee = (name) => {
 connection.query("SELECT name FROM emylorees where name =" + name, (err, res) => {
  if (err) throw err;
  console.log(res);
  connection.end();
 })
}