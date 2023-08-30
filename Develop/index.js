// TODO: Include packages needed for this application
const fs = require ('fs');
const inquirer = require ('inquirer');
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
var questions = [
   {
      type: 'input',
      message: 'Please provide your name?',
      name: 'name'
   },
    {
       type: 'input',
       message: 'what is the title of your ReadMe?',
       name: 'title'
    },
    {
        type: 'input',
        message: 'Please provide a description of your projecct',
        name: 'description'
     },
     {
        type: 'input',
        message: 'Please describe the installation of the project',
        name: 'installation'
     },
     {
        type: 'input',
        message: 'Please describe the usage of the project',
        name: 'usage'
     },
     {
        type: 'list',
        message: 'Please select a license used in your project',
        name: 'license',
        choices: ['BSD', 'Artistic', 'MPL', 'None']
     },
     {
        type: 'input',
        message: 'Please add anyone who contributed to this project',
        name: 'contributions'
     },
     {
        type: 'input',
        message: 'Please add any testing done',
        name: 'test'
     },
     {
        type: 'input',
        message: 'Please add questions you might have',
        name: 'questions'
     },
     {
        type: 'input',
        message: 'Please add your Github username',
        name: 'username'
     },
     {
        type: 'input',
        message: 'Please add the best email for questions regarding the project',
        name: 'email'
     },
]



// TODO: Create a function to write README file
function writeToFile(fileName,data){
   return fs.writeFileSync(path.join(process.cwd(),fileName), data);
}

// TODO: Create a function into initialize app
function init() {
   inquirer.prompt(questions).then((responses) => {
      console.log ('success on init');
      writeToFile("README.md", generateMarkdown({...responses}));
   });
};
 //call with init  

init();

