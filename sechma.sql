create database if not exists People;

use People;

CREATE TABLE employees (
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    id INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (id)
)

CREATE TABLE phoneNumbers (
    cell VARCHAR(50) NOT NULL,
    home VARCHAR(50) NOT NULL,
    work VARCHAR(50) NOT NULL,
    employeeID
)

AlTER TABLE phoneNumbers
ADD EmergencyContact VARCHAR(50) AFTER work,
select * from phoneNumbers Inner Join on phoneNumbers.employeeID=employees.employeeID

