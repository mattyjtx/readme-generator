// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');

const generatorMarkdown = require('./utils/generateMarkdown')

// TODO: Create an array of questions for user input
const questions = [{
    type: "input",
    message: "What is the title of the project?",
    name: "Title"
}, {
    type: "input",
    message: "What is the project about? Give a detailed description of your project?",
    name: "Description"
}, {
    type: "input",
    message: "What does the user need to install to run this app ?",
    name: "Installation"
}, {
    type: "input",
    message: "How is the app used? Give instructions",
    name: "Usage"
}, {
    type: "list",
    message: "What license is being used? (ie...MIT)",
    name: "License",
    choices:["MIT", "GP2.0", ]
}, {
    type: "input",
    message: "Who contributed to this project?:",
    name: "Contributing"
}, {
    type: "input",
    message: "What commands are needed to test this app?",
    name: "Tests"
}, {
    type: 'input',
    message: 'What is your Github username?',
    name: 'Username'
}, {
    type: 'input',
    message: 'What is your email address?',
    name: 'Email'
},

]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join(process.cwd(), fileName), data)

}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown({ ...data}));
            console.log(data)

        })

}

// Function call to initialize app
init();
