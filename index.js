const fs = require('fs');
const inquirer = require('inquirer');

function generateReadme(response) {
    return ` 
\n# ${response.title}
\n# ${response.userStory}
\n## Table of contents`
    
}

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Write your User Story',
        name: 'userStory'
    }

])
.then(response => fs.writeFile('README.md',  generateReadme(response), err => err ? console.error ('failed to write file'): console.log('success')))