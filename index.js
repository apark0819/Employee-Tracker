// Dependencies
const inquirer = require('inquirer')
const mysql = require('mysql2')
const cTable = require('console.table')
require('dotenv').config() 

// Connection to DB

const db = mysql.createConnection(
    {
        host: "localhost",
        user: process.env.user,
        password: process.env.pass,
        database: process.env.database
    },
    console.log(`Connected to ${process.env.database} database`)
)

// First Action
const promptAction = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'action',
            message: "What would you like to do?",
            choices:["View all departments","View all roles","View all employees","Add a department","Add a role","Add an employee","Update an employee","Exit"]
        }
        ]).then(response => {
            const {action} = response
            routeAction(action)
        })
}

// Await First Action Command
const routeAction = async (action) => {
    let exit = false
    switch(action){
        case "exit":
            exit = true
            break
        case "View all departments":
            await viewDepartments()
            break
        case "View all roles":
            await viewRoles()
            break
        case "View all employees":
            await viewEmployees()
            break
        case "Add a department":
            await addDepartment()
            break
        case "Add a role":
            await addRole()
            break
        case "Add an employee":
            await addEmployee()
            break
        case "Update an employee":
            await updateEmployee()
            break
    }
    if(!exit) promptAction()
    else process.exit()
}

