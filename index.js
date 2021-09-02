// Import and require modules
const mysql = require("mysql2");
const inquirer = require("inquirer");
const cTable = require("console.table");
const db = require("./db");
// const { inherits } = require("util");
// const { allowedNodeEnvironmentFlags } = require("process");

//  WHEN I start the application
//  THEN I am presented with the following options: view all departments, view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

async function mainMenu() {
  const { mainMenuAction } = await inquirer.prompt([
    {
      name: "mainMenuAction",
      type: "list",

      message: "Please choose an action below",
      choices: [
        {
          value: "View all departments",
          name: "view_departments",
        },
        {
          value: "View all roles",
          name: "view_roles",
        },
        {
          value: "View all employees",
          name: "view_employees",
        },
        {
          value: "Add a department",
          name: "add_department",
        },
        {
          value: "Add a role",
          name: "add_role",
        },
        {
          value: "Add an employee",
          name: "add_employee",
        },
        {
          value: "Update an employee role",
          name: "update_role",
        },
        {
          value: "QUIT application",
          name: "quit",
        },
      ],
    },
  ]);

  console.log(mainMenuAction);
  switch (mainMenuAction) {
    case "View all departments":
      return viewDepartments();
    case "view_employees":
      return viewEmployees();
    case "view_roles":
      return viewRoles();
    case "add_department":
      return addDepartment();
    case "add_role":
      return addRole();
    case "add_employee":
      return addEmployee();
    case "update_role":
      return updateRole();
    case "quit":
      return quit();
  }
}

mainMenu();

async function viewDepartments() {
  console.log("\n");
  console.log("DEPARTMENTS");

  await db.findAllDepartments();

  console.log("\n");

  mainMenu();
}

// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
async function viewEmployees() {
  const employees = await db.findAllEmployees();
  console.log("\n");
  console.table(employees);

  mainMenu();
}

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
async function viewRoles() {
  const roles = await db.findAllRoles();

  console.log("\n");
  console.table(roles);

  mainMenu();
}

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
async function addDepartment() {
  console.log("this is working!");
}

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
async function addRole() {
  console.log("this is working!");
}

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee’s first name, last name, role, and manager, and that employee is added to the database
async function addEmployee() {
  console.log("this is working!");
}

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
async function updateRole() {
  console.log("this is working!");
}

//Quits application
async function quit() {
  console.log("quit this is working!");
}
