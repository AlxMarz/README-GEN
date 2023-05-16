const {questions} = require('./questions');
const inquirer = require("inquirer");
const generateMarkdown = require('./untilities/generateMarkdown');


function askQuestions(questions){
    let qNum = 0;
    const response = {};
    async function promptQuestion(){
        const answer = await inquirer
        .prompt({
            type: questions[qNum].type,
            name: questions[qNum].name,
            message: questions[qNum].message,
            choices: questions[qNum].choices
        })
        const answerName = questions[qNum].name;
        response[answerName] = answer[questions[qNum].name];
        qNum++
        if(qNum<questions.length){
            promptQuestion()
        } else{
            generateMarkdown(response)
        }
    }
    promptQuestion()
}

function init(){
    askQuestions(questions)
}

init()

