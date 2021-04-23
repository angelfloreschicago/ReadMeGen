// // TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generatorMarkdown = require('./utils/generateMarkdown');

// // TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: 'username',
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: 'email',
    choices: ['Spanish', 'English', 'Russian', 'German'],
  },
  {
    type: 'input',
    message: 'What is your project name?',
    name: 'projectname',
  },
  {
    type: 'input',
    message: 'Please write a short description of your project:',
    name: 'description',
  },
  {
    type: 'list',
    message: 'What kind of license should your project have? (Use arrow keys)',
    name: 'license',
    choices: ['MIT', 'Apache 2.0', 'AGPL 3.0', 'BSD 3', 'None'],
  },
  {
    type: 'confirm',
    message: '(bsd3)',
    name: 'installation',
  },
  {
    type: 'input',
    message: 'What command should be run to tun tests?',
    name: 'tests',
  },
  {
    type: 'input',
    message: 'What does the user need to know about using the repo?',
    name: 'usage',
  },
  {
    type: 'input',
    message: 'What does the user need to know about contributing to the repo?',
    name: 'contributing',
  },
  
];

// // TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function(err) {
    console.log(fileName)
    console.log(data)
    if (err) {
        return console.log(err)
    } else {
        console.log("success")
    }
})
}

// // TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions)
        .then(function(data) {
            writeToFile("README.md", generatorMarkdown(data));
            console.log(data)

        })
}

// // Function call to initialize app
init();