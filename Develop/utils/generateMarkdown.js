// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none"){
    return `![License: MPL 2.0](https://img.shields.io/badge/License-${license}_2.0-brightgreen.svg)`;
  }
  return "";
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none"){
    return `\n [License](#license)\n`;
  }
  return "";
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none"){
    return `## License
    Licensed with ${license}.`;
  }
  return "";
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  created by ${data.name}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents
  * [Description](#description)
  * [Requirements](#requirements)
  * [Usage](#usage)
  * [Contact-Me](#contact-me)
  * [Contributors](#contributors)
  * [Testing](#testing)
  * [Questions](#questions)
  ${renderLicenseLink(data.license)}
  ## Description
  ${data.description}
  ## Requirements
  ${data.requirements}
  ## Usage
  ${data.usage}
  ## Contact-Me
  ${data.name}
  ${data.email}
  (https://github.com/${data.username})
  ## Contributors
  ${data.contributions}
  ## Testing
  ${data.test}
  ${renderLicenseSection(data.license)}
  ## Questions
  ${data.questions}
`;
}

module.exports = generateMarkdown;
