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
          name: "View all departments",
        },
        {
          value: "View all roles",
          name: "View all roles",
        },
        {
          value: "View all employees",
          name: "View all employees",
        },
        {
          value: "Add a department",
          name: "Add a department",
        },
        {
          value: "Add a role",
          name: "Add a role",
        },
        {
          value: "Add an employee",
          name: "Add an employee",
        },
        {
          value: "Update an employee role",
          name: "Update an employee role",
        },
        {
          value: "QUIT application",
          name: "QUIT",
        },
      ],
    },
  ]);

  switch (mainMenuAction) {
    case "View all departments":
      return viewDepartments();
    case "View all roles":
      return viewRoles();
    case "View all employees":
      return viewEmployees();
    case "Add a department":
      return addDepartment();
    case "Add a role":
      return addRole();
    case "Add an employee":
      return addEmployee();
    case "Update an employee role":
      return updateRole();
    case "QUIT application":
      return quit();
  }
}

mainMenu();

// WHEN I choose to view all departments
// THEN I am presented with a formatted table showing department names and department ids
async function viewDepartments() {
  console.log("\n");
  console.log("ALL DEPARTMENTS");
  console.log("\n");

  await db.findAllDepartments();

  mainMenu();
}

// WHEN I choose to view all roles
// THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role
async function viewRoles() {
  console.log("\n");
  console.log("ALL ROLES");
  console.log("\n");

  await db.findAllRoles();

  mainMenu();
}
// WHEN I choose to view all employees
// THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to
async function viewEmployees() {
  console.log("\n");
  console.log("ALL EMPLOYEES:");
  console.log("\n");

  await db.findAllEmployees();

  mainMenu();
}

// WHEN I choose to add a department
// THEN I am prompted to enter the name of the department and that department is added to the database
async function addDepartment() {
  console.log("\n");

  const newDepartment = await inquirer.prompt([
    {
      name: "name",
      message: "Please provide the name of the new department",
    },
  ]);

  await db.addDepartment(newDepartment);

  console.log("\n");
  console.log(`${newDepartment.name} has been added to the database!`);
  console.log("\n");

  mainMenu();
}

// WHEN I choose to add a role
// THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database
async function addRole() {
  console.log("\n");

  const newRole = await inquirer.prompt([
    {
      name: "title",
      message: "Please provide the name of the new role",
    },
    {
      name: "salary",
      message: "What is the yearly salary of the new employee?",
    },
    {
      name: "department_id",
      message: "Please provide a numeric value for the department ID",
    },
  ]);

  await db.addNewRole(newRole);

  console.log("\n");
  console.log(`${newRole.title} has been added to the database!`);
  console.log("\n");

  mainMenu();
}

// WHEN I choose to add an employee
// THEN I am prompted to enter the employee???s first name, last name, role, and manager, and that employee is added to the database
async function addEmployee() {
  console.log("\n");

  const newEmployee = await inquirer.prompt([
    {
      name: "first_name",
      message: "Please provide the First Name of the new employee",
    },
    {
      name: "last_name",
      message: "Please provide the Last Name of the new employee",
    },
    {
      name: "role_id",
      message: "What is the role ID of the new employee?",
    },
    {
      name: "manager_id",
      message: "What is the new employee's manager id?",
    },
  ]);

  await db.addNewEmployee(newEmployee);

  console.log("\n");
  console.log(
    `${newEmployee.first_name} ${newEmployee.last_name} has been added to the database!`
  );
  console.log("\n");

  mainMenu();
}

// WHEN I choose to update an employee role
// THEN I am prompted to select an employee to update and their new role and this information is updated in the database
async function updateRole() {
  const employees = await db.findAllEmployees();

  const employeeChoices = employees.map(({ id, first_name, last_name }) => ({
    name: `${first_name} ${last_name}`,
    value: id,
  }));

  const roles = await db.findAllRoles();
  console.log(roles);

  const roleChoices = roles.map(({ id, title }) => ({
    name: title,
    value: id,
  }));

  const { roleId } = await prompt([
    {
      type: "list",
      name: "roleId",
      message: "Which role do you want to assign the selected employee?",
      choices: roleChoices,
    },
  ]);

  await db.updateEmployeeRole(employeeId, roleId);

  mainMenu();
}

//Quits application
async function quit() {
  console.log("QUITTING APPLICATION");
}
