// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "none") {
    return `![Github Badge]https://img.shields.io/badge/license-${license}-blue.svg`
  } else {
    return "" //if there is no license
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ${data.name} ${data.license}
  ## Description
  ${data.description}
  ## Table of Contents

  ## Installation
  ${data.require}

  ## Usage
  ${data.usage}
  ${data.languages}

  ## Credits
  ### Contact Me
  ${data.github}
  ${data.email}
  ${data.credits}

  ## License
  ${data.license}
`;
}

module.exports = generateMarkdown;
