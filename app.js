const questions = require('./questions');
const inquirer = require("inquirer");

function askQuestions(){
    inquirer.prompt(questions).then(function(answers) {
        console.log(answers);

    })

}

function main(){
    console.log(questions);
    askQuestions()
}

main();