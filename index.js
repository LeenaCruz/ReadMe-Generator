const fs = require('fs');
const inquirer = require('inquirer');

function generateReadme(response) {
    return ` 
\n# ${response.title}
\n## Description
\n ${response.description}
\n## User Story 
\n ${response.userStory}
\n## Acceptance Criteria
\n## Mock-Up
\n## Deployed Application
\n## Credits
\n## Table of contents
`
    
}

inquirer.prompt([
    {
        type: 'input',
        message: 'What is your project name?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'Describe your project.',
        name: 'description',
    },
    {
        type: 'input',
        message: 'Write your User Story',
        name: 'userStory'
    }

])
.then(response => fs.writeFile('README.md',  generateReadme(response), err => err ? console.error ('failed to write file'): console.log('success')))