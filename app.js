const {questions} = require('./questions');
const inquirer = require("inquirer");
const generateMarkdown = require('./untilities/generateMarkdown');

// const { default: Choice } = require('inquirer/lib/objects/choice');
// const { default: Choices } = require('inquirer/lib/objects/choices');
// const util = require('util')
const Choices = require("inquirer/lib/objects/choices")

function askQuestions(questions){
    let qNum = 0;
    const response = {};
    async function promptQuestion(){
        const answer = await inquirer
        .prompt({
            type: questions[qNum].type,
            name: questions[qNum].name,
            message: questions[qNum].message,
            Choices: questions[qNum].Choices
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

// function askQuestions(){
//     inquirer.prompt(questions).then(function(answers) {
//         console.log(answers);

//     })

// }

// function main(){
//     console.log(questions);
//     askQuestions()

// }

// // render

// main();