const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
        type: "input",
        name: "github",
        message: "What is your GitHub username?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your email adress"
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "input",
        name: "description",
        message: "Please write a short description of your project."
    },
    {
        type: "input",
        name: "license",
        message: "What kind of license should your project have?"
    },
    {
        type: "input",
        name: "install",
        message: "What command should be run to install dependencies?"
    },
    {
        type: "input",
        name: "test",
        message: "What command should be run to run tests ?"
    },
    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using the repo?"
    },
    {
        type: "input",
        name: "contributions",
        message: "What does the user need to know about contributing to the repo?"
    },
];

// function to write README file
function writeToFile(fileName, data) {
    fs.writeToFile(fileName, data)
    
    if(err){
        return console.log(err);    
    }
    console.log("Success!")
}

// function to initialize program
function init() {
    return inquirer.prompt(questions);

}

// function to grab the answers and create a markdown
function generateMarkdown(answers) {
    return `
    ## README DEMO
    
    ## Title of Project
    ${answers.title}

    ## Description
    ${answers.description}

    ## License
    ${answers.license}

    ## Installation
    ${answers.install} , ${answers.test}

    ## Usage
    ${answers.usage}
    
    ## Contributions
    ${answers.contributions}
    `

}
// function call to initialize program
init()
    .then(function (answers) {
        const README = generateMarkdown(answers);

        return writeToFile("README.md", README);
    });
    // .then(function () {
    //     console.log("Successfully wrote to DemoREADME.MD");
    // })
    // .catch(function (err) {
    //     console.log(err);
    // });
