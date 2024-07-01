const fs = require('fs');
const inquirer = require('inquirer');
// const  badge = require('./modular/badge.js');

function generateReadme(response) {
// const badge = badge();
// \n ${badge}
const badge = response.license;
console.log(badge)
let newBadge = badge.replace(/ /g, '%20')
console.log(newBadge)
    return ` 
\n# ${response.title}
\n ![Static Badge](https://img.shields.io/badge/${newBadge}-brightgreen)
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
\n ${response.license}
\n## Mock-Up
\n ![${response.mockup}](./images/${response.filename})
\n## Deployed Application
\n [URL](${response.url})
\n## Contributing
\n## Test
\n## Questions
\n Write any questions to: [${response.email}](mailto:${response.email})
\n https://github.com/${response.github}
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
    {
        type: 'list',
        message: 'Examples of uses:',
        name: 'license',
        choices: ['MIT','GNU GPLv3','GNU AGPLv3','Mozilla Public License 2.0', 'Apache License 2.0', 'Boost Software License 1.0','The Unlicense']
    },
    {
        type: 'input',
        message: 'Describe your mockup (store it in an images folder)',
        name: 'mockup',
    },
    {
        type: 'input',
        message: 'Write your mockup file name with extension. Ex. mock-up.jpg',
        name: 'filename',
    },
    {
        type: 'input',
        message: 'What is your Deployed URL?',
        name: 'url',
    },
    {
        type: 'input',
        message: 'What is your email?',
        name: 'email',
    },
    {
        type: 'input',
        message: 'What is your GitHub username?',
        name: 'github',
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