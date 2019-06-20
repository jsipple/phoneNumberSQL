create database if not exists People;

use People;

CREATE TABLE employees (
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    employeeID INT NOT NULL AUTO_INCREMENT,
    PRIMARY KEY (employeeID)
);

-- CREATE TABLE phoneNumbers (
--     cell VARCHAR(50) NOT NULL,
--     home VARCHAR(50) NOT NULL,
--     work VARCHAR(50) NOT NULL,
--     employeeID
-- )

AlTER TABLE employees ADD EmergencyContact VARCHAR(50);

