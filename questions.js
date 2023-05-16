const questions = [

   {
    type: "input",
    name: "fullName",
    message: "What is your full name?"
    },
    {
      type: "input",
      name: "userName",
      message: "What is your GitHub Username?"
    },
    {
      type: "input",
      name: "email",
      message: "What is your email address?"
     },
    {
        type: "input",
        message: "what is the name of your project",
        name: "title",
    },
    {
      type: "input",
      name: "Description",
      message: "provide a brief description of your project!",
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
      name:"credits",
      message:"Who are the contributing parties?"
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

    
]

module.exports = {questions}