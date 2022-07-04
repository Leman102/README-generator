// If there is no license, return an empty string
licenseBadge = (data) => {
  const licenseType = data.license;
  let licenseString = " "
  if (licenseType === "MIT") {
    licenseString = `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)`
  };
  if (licenseType === "GNU General Public License 2.0") {
    licenseString = `![License: GPL v2](https://img.shields.io/badge/License-GPL%20v2-blue.svg)`
  };
  if (licenseType === "Apache License 2.0") {
    licenseString = `![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)`
  };
  if (licenseType === "GNU General Public License 3.0") {
    licenseString = `![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)`
  };
return licenseString;
};

//create the list of languages used on the project
const languagesUsed = (data) => {
 var listLanguages = data.languages.join('<br>')
 return listLanguages
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `
# ${data.projectTitle}  ${licenseBadge(data)}
## Table of Contents:
1. [Description](#description) 
2. [Installation](#installation)
3. [Usage](#usage)  
4. [Contributing](#contributing)
5. [Tests](#tests)
6. [Technologies](#technologies)
7. [License](#license)
8. [Questions?](#questions)
## Description
${data.description} 
## Installation
${data.installation}
## Usage
${data.usage}
## Contributing
${data.contributing}
## Tests
${data.tests}
## Technologies
${languagesUsed(data)}
## License
${licenseBadge(data)}
<br />
This application is covered by the [${data.license}](https://choosealicense.com/licenses/) license.
## Questions
Please reach out via:
- **GitHub:**
  **[${data.github}](https://github.com/${data.github})**
- **E-mail:**
  **${data.email}**
    `;
}

module.exports = generateMarkdown;

