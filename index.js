const fs = require('fs');
const inquirer = require('inquirer');
const validator = require('validator');

function generateReadme(response) {
    return ` 
\n# ${response.title}
\n## Description
\n ${response.description}
\n## User Story 
\n ${response.userStory}
\n## Table of Contents
\n* [Installation](#installation)
\n* [Usage](#usage)
\n* [License](#license)
\n* [Mock-Up](#mock-up)
\n
\n## Installation
\n ${response.installation}
\n## Usage
\n ${response.usage}
\n## License
\n## Mock-Up
\n![Video of how to generate a README.md using node.js](./images/mock-up.gif)
\n## Deployed Application
\n## Contributing
\n## Test
\n## Questions
\n ${response.github}
\n## Credits


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
    },
    {
        type: 'input',
        message: 'Write the necessary steps for installation.',
        name: 'installation',
    },
    {
        type: 'input',
        message: 'Examples of uses:',
        name: 'usage',
    },
//     {
//         type: 'confirm',
//         message: 'Do you want to add another criteria?',
// name: 'anotherCriteria',

// validate: (anotherCriteria) => {
//             if (anotherCriteria === true) {
//                 const more = {
//                     type: 'input',
//                     message: 'Write your acceptance criteria.',
//                     name: 'criteria',
//                 }
//               criteriaArray.push(more);
//             }
//         }
    // },

  

])
    .then(response => fs.writeFile('README.md', generateReadme(response), err => err ? console.error('failed to write file') : console.log('success')))