// function to generate markdown for README
function generateMarkdown(data) {
  return `
  
  
  README DEMO
  ============

    
  # Title of Project
  -----------------
  - ${data.title}

  # Description
  ## ${data.description}

  # License
  ## ${data.license}

  # Installation
  * ${data.install} 
  * ${data.test}

  # Usage
  ${data.usage}
    
  # Contributions
  ${data.contributions}


`;
}

module.exports = generateMarkdown;

