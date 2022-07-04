// Declaring the dependencies and variables
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown.js")



//Prompt the user questions to populate the README.md
const promptUser = () => {
    return inquirer.prompt([
        {
            type: "input",
            name: "projectTitle",
            message: "What is the project title?",
        },
        {
            type: "input",
            name: "description",
            message: "Write a brief description of your project: "
        },
        {
            type: "input",
            name: "installation",
            message: "Describe the installation process if any: ",
        },
        {
            type: 'checkbox',
            name: 'languages',
            message: 'What did you build this project with? (Check all that apply)',
            choices: ['JavaScript', 'HTML', 'CSS', 'ES6', 'jQuery', 'Bootstrap', 'Node']
        },
        {
            type: "input",
            name: "usage",
            message: "What is this project usage for?"
        },
        {
            type: "list",
            name: "license",
            message: "Chose the appropriate license for this project: ",
            choices: ["MIT", 
                "GNU General Public License 2.0", 
                "Apache License 2.0", 
                "GNU General Public License 3.0"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Who are the contributors of this projects?"
        },
        {
            type: "input",
            name: "tests",
            message: "Is there a test included?"
        },
        {
            type: "input",
            name: "github",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ])
} 


function writeToFile(fileName, data) {
    // Create Markdown from data
    const markdown = generateMarkdown(data);
    // Write Markdown file
    fs.writeFile(fileName, markdown, function (err) {
        if (err) throw err;
        console.log("README created! check the 'dist' folder 😊");
    });
}

init = () =>{
    promptUser()
        .then(data => {
            writeToFile ('./dist/README.md',data)
        })
        .catch(err => {
            console.log(err)
        })
}

init();