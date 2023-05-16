const questions = [
    {
        type: "input",
        message: "what is the name of your project",
        name: "project name",
        default: "README GEN"  
    },
    {
      type: "input",
      name: "Description",
      message: "provide a brief description of your project!",
      default: "Add a description"
    },
    {
      type:"input",
      name:"installation",
      message:"What are the installation instructions?"
    },
    {
      type:"input",
      name:"usage",
      message:"What is the projects usage?"
    },
    {
      type:"input",
      name:"contribution",
      message:"Who are the contributing parties?"
    },
    {
      type:"input",
      name:"test",
      message:"What are the test instructions your project?"
    },
    {
      type:"list",
      name:"license",
      message:"What is the license for your project?",
            choices:[
                "MIT",
                "Apache",
                "GPL"
            ]

    },
    {
      type:"input",
      name:"git",
      message:"WHat is your github id?",
    }

    
]

module.exports = questions