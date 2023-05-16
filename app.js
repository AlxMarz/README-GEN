//REQUIRES TO RUN APP 
const {questions} = require('./questions');
const inquirer = require("inquirer");
const generateMarkdown = require('./untilities/generateMarkdown');


function askQuestions(questions){

    let qNum = 0;
    //HOLDS RESPONSE IN EMPTY OBJECT
    const response = {};
    //ASYNC TO WAIT FOR TERMINAL
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
        //CHECKS FOR MORE QUESTIONS
        qNum++
        if(qNum<questions.length){
            promptQuestion()
        } else{
            //RESPONSE SENDING TO GENERMD
            generateMarkdown(response)
        }
    }
    promptQuestion()
}

// CALLS ASKQUESTION FOR THE FIRST QUESTION
function init(){
    askQuestions(questions)
}

// STARTS THE APP
init()

