// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  
  # Title of Project :computer:
  ============

  ## ${data.title}

  [![License](${data.license})]
 
  ## Table of Contents :page_with_curl:

  *[Description](#description)

  *[Installation](#installation)

  *[Usage](#usage)

  *[Contributions](#contributions)

  *[Questions](#questions)

  *[License](#license)
    
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
  ## ${data.license}


`;
}

module.exports = generateMarkdown;

