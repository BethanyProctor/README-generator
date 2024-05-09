// TODO: Include packages needed for this application
const inquirer = require('inquirer')

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'name',
        message: 'What is your full name?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Describe the functionality and purpose of this project.'
    },
    {
        type: 'input',
        name: 'require',
        message: 'Please enter the dependencies for this project'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Please provide instructions for using this project.'
    },
    {
        type: 'input',
        name: 'credits',
        message: 'List all credits, including collaborators, third-party assets, and tutorials used.'
    },    
    {
        type: 'input',
        name: 'license',
        message: 'Please enter the license for this project.'
    },
    {
        type: 'input',
        name: 'langauges',
        message: 'Please list all languages used in this project.'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();