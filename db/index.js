// This file includes functions that interact with the sql database.

// Bring in required modules
const cTable = require("console.table");
const db = require("./connection");
const mysql = require("mysql2");

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

// Query to find all departments and return the values to the base index.js

//Returns all departments
function findAllDepartments() {
  //   const conn = await pool.getConnection();
  return db
    .promise()
    .query("SELECT id, name AS Departments FROM department ORDER BY id")
    .then(([data]) => {
      console.table(data);
    })
    .catch();
}

//returns all employees. JOINS bring in role titles, role salaries and manager names
function findAllEmployees() {
  return db
    .promise()
    .query(
      `SELECT 
      employeeX.id, 
      employeeX.first_name AS First, 
      employeeX.last_name AS Last, 

      roleX.title AS Title, 
      roleX.salary AS Salary, 

      CONCAT(managerX.first_name, " ",managerX.last_name) AS Manager,

      departmentX.name AS Department

      FROM employee employeeX

      LEFT JOIN role roleX ON employeeX.role_id = roleX.id
      LEFT JOIN department departmentX ON roleX.department_id = departmentX.id
      LEFT JOIN employee managerX ON employeeX.manager_id = managerX.id
      ORDER BY employeeX.id
     `
    )
    .then(([data]) => {
      console.table(data);
    })
    .catch();
}
function findAllRoles() {
  return db
    .promise()
    .query("SELECT id, title as Titles, salary AS Salary FROM role ORDER BY id")
    .then(([data]) => {
      console.table(data);
    })
    .catch();
}
function addDepartment(data) {
  return db
    .promise()
    .query("INSERT INTO department SET ?", data)
    .then(([data]) => {
      console.table(data);
    })
    .catch();
}
function addRole(data) {
  return db.promise().query("INSERT INTO role SET ?", data).then().catch();
}
function addEmployee() {
  return db.promise().query("INSERT INTO employee SET ?", data).then().catch();
}
function updateRole() {
  return console.log("this is working!");
}
//Quits application
function quit() {
  return console.log("this is working!");
}

module.exports = {
  findAllDepartments,
  findAllEmployees,
  findAllRoles,
  addDepartment,
  addEmployee,
  updateRole,
  quit,
};
