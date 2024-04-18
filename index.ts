#! /usr/bin/env node

//import the inquirer module
import inquirer from "inquirer";

//declare a constant answer and assign to it 
const answers : {
    sentence : String
}= await inquirer.prompt(
    [
        {
            name : "sentence",
            type : "input",
            message : "Enter your sentence to count the words :"
        }
    ]
)

const words = answers.sentence.trim().split(" ");

//print the array of words 
console.log(words)

//print the word count of the sentence
console.log(`Your sentence word count is ${words.length}`);

