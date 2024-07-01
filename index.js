const fs = require('fs');
const inquirer = require('inquirer');

function generateReadme(response) {
// Replaces blank spaces in license name with "%20" for link implementation.
const badge = response.license;
console.log(badge)
let newBadge = badge.replace(/ /g, '%20')
// Creates structure of README.
    return ` 
\n# ${response.title}
\n ![Static Badge](https://img.shields.io/badge/${newBadge}-brightgreen)
\n## Description
\n ${response.description}
\n## User Story 
\n *${response.userStory}*
\n## Table of Contents
\n* [Installation](#installation)
\n* [Usage](#usage)
\n* [License](#license)
\n* [Mock-Up](#mock-up)
\n* [Deployed Application](#deployed-application)
\n* [Contributing](#contributing)
\n* [Test](#test)
\n* [Questions](#questions)
\n* [Future Features](#future-features)
\n* [Credits](#credits)
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
\n How to contribute to this project:
\n ${response.contribution}
\n## Test
\n ${response.test}
\n## Questions
\n Write any questions to: [${response.email}](mailto:${response.email})
\n My GitHub: [${response.github}](https://github.com/${response.github})
\n## Future Features
\n ${response.features}
\n## Credits
\n ${response.credits}
`
}
// Ask the user info about their project to create README.
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
        message: 'How to contribute?',
        name: 'contribution',
    },
    {
        type: 'input',
        message: 'How to test?',
        name: 'test',
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
    {
        type: 'input',
        message: 'Write about new features you want to implement:',
        name: 'features',
    },
    {
        type: 'input',
        message: 'Write about your credits and resources:',
        name: 'credits',
    },

])
    .then(response => fs.writeFile('README.md', generateReadme(response), err => err ? console.error('failed to write file') : console.log('success')))
