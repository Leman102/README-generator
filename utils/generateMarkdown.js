// If there is no license, return an empty string
// function to generate markdown for README
function licenseBadge(data) {
  const licenseType = data.license[0];
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

function generateMarkdown(data) {
    return `# ${data.projectTitle}
        ## Table of Contents:
          1. [Description](#description) 
          2. [Installation](#installation)
          3. [Usage](#usage)  
          4. [Contributing](#contributing)
          5. [Tests](#tests)
          6. [License](#license)
          7. [GitHub](#github)
          8. [E-mail](#E-mail)
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
        ## License
        ${licenseBadge(data)}
        ##Questions?
        Please reach out via:
        ### GitHub
        ${data.github}
        ### E-mail
        ${data.email}
    `;
}
module.exports = generateMarkdown;