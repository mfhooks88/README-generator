// // TODO: Create a function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
// function renderLicenseBadge(license) {}

// // TODO: Create a function that returns the license link
// // If there is no license, return an empty string
// function renderLicenseLink(license) {}

// // TODO: Create a function that returns the license section of README
// // If there is no license, return an empty string
// function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Description
  ${data.description}

  ## Table of Contents
  * [Installations](#installations)
  * [Usage](#usage)
  * [Contributors](#contribution)
  * [Test](#test)
  * [Questions](#questions)

  ## Installations
  To Install dependencies, run this command:
  ${data.dependencies}

  ## Contact Me
  Contact me below at either GitHub or via Email:
  ${data.github}
  ${data.email}
`;
}

module.exports = generateMarkdown;
