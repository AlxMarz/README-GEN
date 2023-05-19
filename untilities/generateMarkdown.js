const fs = require('fs');

function generateMarkdown(response){
    //CHEKS FOR MULTIPLE CHOICE
    if (response.license === "mit") {
        badge = "https://badgen.net/github/license/micromatch/micromatch";
    } else if (response.license === "gpl") {
        badge = "https://badgen.net/snapcraft/license/okular";
    } else {
        badge = "https://badgen.net/gitlab/license/gitlab-org/omnibus-gitlab";
    };

    //README TEMPLATE
    
    //USING WRITE FILE FROM THE RESPONSE TO RENDER README
    fs.writeFile(`${response.fullName}'s README`, `# ${response.title}

## ${response.description}
                
## Table of Contents
                
- [Installation](#installation)
- [Usage](#usage)
- [Credits](#credits)
- [License](#license)
                
## ${response.installation}
                
            
                
## Usage
                
${response.usage}
                
## Credits
                
GitHub: (https://github.com/${response.userName})
[Email Me](mailto:${response.email})

${response.credits}
                
## License
                
![License Badge](${badge})
                
---`, err => err ? 
console.log("There was an error!") : console.log("README has been generated!"))
            }

            //SENDS TO APP.JS
            module.exports = generateMarkdown