const fs = require('fs');
function generateMarkdown(response){
    if (response.liscense === "mit") {
        badge = "https://badgen.net/github/license/micromatch/micromatch";
    } else if (response.liscense === "gpl") {
        badge = "https://badgen.net/snapcraft/license/okular";
    } else {
        badge = "https://badgen.net/gitlab/license/gitlab-org/omnibus-gitlab";
    };
    // USE THE WRITEFILE FUNCTION TO MAKE A README 
    fs.writeFile(`${response.fullName}'s README`, `# ${response.title}

## Description
    
${response.description}
    
## Table of Contents
    
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
    
## Installation
    
${response.installation}
    
## Usage
    
${response.usage}
    
## Credits
    
GitHub: (https://github.com/${response.userName})
[Email Me](mailto:${response.email})

${response.credits}
    
## License
    
![License Badge](${badge})
    
---`, err => err ? console.log("There was an error!") : console.log("README generated!"))
}

module.exports = generateMarkdown