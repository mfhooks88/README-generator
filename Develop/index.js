// TODO: Include packages needed for this application
const inquirer = require("inquirer");

const fs = require ("fs");

const path = require ("path");

const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "What's the name of your project?"
    },

    {
        type: "input",
        name: "description",
        message: "Describe your project:"
    },

    {
        type: "input",
        name: "installation",
        message: "Any installation requirements?"
    },

    {
        type: "input",
        name: "usage",
        message: "What is this used for?"
    },

    {
        type: "input",
        name: "test",
        message: "What command tests are there?"
    },

    {
        type: "list",
        name: "license",
        message: "what licenses does this project have?",
        choices: ["Apache", "GNU", "MIT", "None"]
    },

    {
        type: "input",
        name: "dependencies",
        message: "Any dependencies to install?"
    },

    {
        type: "input",
        name: "contributing",
        message: "Who contributed towards this repo?"
    },

    {
        type: "input",
        name: "github",
        message: "What's your GitHub username?"
    },

    {
        type: "input",
        name: "email",
        message: "What's your email?"
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then((inquirerAnswers) => {
        writeToFile("./utils/newREADME.md", generateMarkdown(inquirerAnswers));
    })
}

// Function call to initialize app
init();
