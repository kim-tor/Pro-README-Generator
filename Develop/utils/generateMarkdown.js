// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  
  README DEMO :computer:
  ============

  ## Table of Contents
    
  Title of Project
  -----------------
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

  # License
  ## ${data.license}


`;
}

module.exports = generateMarkdown;

