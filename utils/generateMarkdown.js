// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github Badge](https://img.shields.io/badge/license-${license}-blue.svg)`
  } else {
    return "" //if there is no license
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== "none") {
    return `* [License](#license)`
  } else {
    return ""
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== "none") {
    return `## License
    Distributed under the ${license} license.`
  } else {
    return ""
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  Created by ${data.name} ${renderLicenseBadge(data.license)}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Credits](#credits)
  * [Contact Me](#contact-me)
  ${renderLicenseLink(data.license)}

  ## Installation
  ${data.require}

  ## Usage
  ${data.usage} 
  </br>
  Languages : ${data.languages}

  ## Credits
  ${data.credits}

  ## Contact Me
  Find me on GitHub: ${data.github}
  </br>
  Email me: ${data.email}

  ${renderLicenseSection(data.license)}
`;
}

module.exports = generateMarkdown;
