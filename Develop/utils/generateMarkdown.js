// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  ${returnLicense(data.license)}

  Title of Project :computer:
  ============
  # ${(data.title)}


  ## Table of Contents :page_with_curl:

  * [Description](#description)

  * [Installation](#installation)

  * [Usage](#usage)

  * [Contributions](#contributions)

  * [Questions](#questions)

  * [License](#license)
    
  # Description
  ## ${data.description}

  # Installation
  * ${data.install} 
  * ${data.test}

  # Usage
  ## ${data.usage}
    
  # Contributions
  ## ${data.contributions}

  # Questions
  ## If you have any questions feel free to email me at :[Email](${data.email})
  ## Here's a link to my GitHub:(http://github.com/${data.github})

  # License
  ## ${returnLicense(data.license)}
  

`;
}

function returnLicense(licenseChoice) {

  switch (licenseChoice) {
    case "MIT License":
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
      break;

    case "Apache License":
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
      break;
    case "GNU GPLv3":
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)"
      break;

    default:
      break;
  }

};

module.exports = generateMarkdown;

