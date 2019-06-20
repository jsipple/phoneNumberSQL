const db = require("../models");

module.export = (app) => {
 app.get("/api/employee/:name", (req, res) => {
  db.Employee.findOne({
   where: {
    name: req.params.name
   },
   include: [db.phoneNumbers]
  }).then((employee) => {
   res.json(employee)
  })
 })

 app.post("/api/employee", (req,res => {
  db.Employee.create(req.body).then((employee) => {
   res.json(employee)
  })
 }))
 
 app.delete("/api/employee/:name", (req, res) => {
  db.Employee.destroy({
   where: {
    name: req.params.name
   }
  }).then((employee) => {
   res.json(employee)
  })
 })

 app.post("/api/phoneNumbers", (req,res) => {
  db.PhoneNumbers.create(req.body).then((phoneNum) => {
   res.json(phoneNum)
  })
 })

 app.get("/api/phoneNumbers", (req,res) => {
  const query = {};
  if (req.query.name) {
   query.name = req.query.name
  }
  db.PhoneNumbers.findAll({
   where: query,
   include: [db.Employee]
  }).then((phoneNum) => {
   res.json(phoneNum)
  })
 })
}