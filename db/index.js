// This file includes functions that interact with the sql database.

// Bring in required modules
const cTable = require("console.table");
// const connection = require("./connection");
const mysql = require("mysql2");

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids

// Query to find all departments and return the values to the base index.js

function findAllDepartments() {
  return console.log("this is working!");
}
function findAllEmployees() {
  return console.log("this is working!");
}
function findAllRoles() {
  return console.log("this is working!");
}
function addDepartment() {
  return console.log("this is working!");
}
function addRole() {
  return console.log("this is working!");
}
function addEmployee() {
  return console.log("this is working!");
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
