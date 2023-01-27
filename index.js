const inquirer = require('inquirer');
const { Manager } = require('./lib/classes.js');
const { Engineer } = require('./lib/classes.js');
const { Intern } = require('./lib/classes.js');
const helper = require('./src/helper.js');
const createHTML = new helper();

// CLI Prompts
// this function welcomes the user and asks if they are ready to proceed
// if they answer yes, they are taken to the next series of prompts in the prompts() function
// if they answer no, the application is cancelled
const welcomePrompt = () => {
    inquirer.prompt([
        {
            name: 'proceed',
            type: 'confirm',
            message: "Hello! Welcome to the Team Profile Generator. Here you will be asked a series of questions about your team. Type your responses directly in the command line, and, once you are finished, a website will be made to display the details of your team. Ready to get started?"
        }
    ]).then((answers) => {
        if (answers.proceed) {
            createHTML.openTags();
            prompts()
        }
    });
};

// this function contains the main questions to be answered by the user
// these questions seek to collect information about the employees name, id number, email address, and their role
// based on their role, they will be asked an additional question
// for managers, they will be asked for their office number
// for engineers, they will be asked for their gitHub username
// for interns, they will be asked for the name of their school
const prompts = () => {
    inquirer.prompt([
            {
               name: 'empName',
               type: 'input',
               message: "What is the employee's name?" 
            },
            {
                name: 'empId',
                type: 'input',
                message: "What is the employee's ID number?"
            },
            {
                name: 'empEmail',
                type: 'input',
                message: "What is the employee's email address?"
            },
            {
                name: 'empRole',
                type: 'list',
                message: "What is the employee's role?",
                choices: ["Manager", "Engineer", "Intern"],
                default: 1
            },
            {
                name: 'officeNum',
                type: 'input',
                message: "What is the manager's office number?",
                when: (answers) => answers.empRole === 'Manager'
            },
            {
                name: 'gitHub',
                type: 'input',
                message: "What is the engineer's gitHub username?",
                when: (answers) => answers.empRole === 'Engineer'
            },
            {
                name: 'school',
                type: 'input',
                message: "What school is the intern currently attending?",
                when: (answers) => answers.empRole === 'Intern'
            },

        ]).then((answers) => {
            // create class instances based on empRole
            createEmployee(answers);

            // after all of the questions have been answered, the function getAddNewEmployee() will run, which asks if there is another employee to add
            getAddNewEmployee();
            // console.log(answers);
        });
    };

// this function contains the logic to decide which type of employee object to create based on the answers.empRole property
const createEmployee = (answers) => {
    if (answers.empRole === 'Manager') {
        createManager(answers);
    } else if (answers.empRole === 'Engineer') {
        createEngineer(answers);
    } else if (answers.empRole === 'Intern') {
        createIntern(answers);
    } else {
        const error = new Error('The employee must have a role.');
        console.error(error);
    }
};

// function to create manager object
const createManager = (answers) => {
    let manager = new Manager(answers.empName, answers.empId, answers.empEmail, answers.officeNum);
    // console.log(manager);
    // the manager obejct is passed to createManagerCard as its argument
    // then the html card is created for the manager
    createHTML.createManagerCard(manager.name, manager.id, manager.email, manager.officeNumber);
};

// function to create engineer object
const createEngineer = (answers) => {
    let engineer = new Engineer(answers.empName, answers.empId, answers.empEmail, answers.gitHub);
    // console.log(engineer);
    // the engineer obejct is passed to createEngineerCard as its argument
    // then the html card is created for the engineer
    createHTML.createEngineerCard(engineer.name, engineer.id, engineer.email, engineer.gitHub);
};

// function to create intern object
const createIntern = (answers) => {
    let intern = new Intern(answers.empName, answers.empId, answers.empEmail, answers.school);
    // console.log(intern);
    // the inter obejct is passed to createInternCard as its argument
    // then the html card is created for the intern
    createHTML.createInternCard(intern.name, intern.id, intern.email, intern.school);
};

// this function asks the user if there is another employee they would like to add
// if their response returns yes/true, then the inital prompts() function runs again
// this loop will continue until the user answers no/false to this question
// once the user answers no, the closing tags will be added to the html file
const getAddNewEmployee = () => {
    inquirer.prompt([
        {
            name: 'makeNewEmployee',
            type: 'confirm',
            message: "Would you like to add another employee?"
        }
    ]).then((answers) => {
        if (answers.makeNewEmployee) {
            prompts();
        } else {
            createHTML.closeTags()
        }
    });
}

// declares initialize function
const init = () => welcomePrompt()

init();