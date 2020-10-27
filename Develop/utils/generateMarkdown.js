// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  
  README DEMO :computer:
  ============

  ## Table of Contents :page_with_curl:

  *[Title](#title)

  *[Description](#description)

  *[Installation](#installation)

  *[Usage](#usage)

  *[Contributions](#contributions)

  *[Questions](#questions)

  *[License](#license)
    
  # Title of Project

  ## ${data.title}

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
  ## Here's a link to my [GitHub]:(http://github.com/${data.github})

  # License
  ## ${data.license}


`;
}

module.exports = generateMarkdown;

