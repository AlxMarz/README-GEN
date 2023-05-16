const questions = require('./questions');
const inquirer = require("inquirer");
var fs = require("fs")
const Choices = require("inquirer/lib/objects/choices")

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