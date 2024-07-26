#! /usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";


let condition : boolean = true;

const currency: any = {
    USD: 1,        
    EUR: 0.92,    
    GBP: 0.76,     
    CAD: 1.25,     
    AUD: 1.32,     
    NZD: 1.44,     
    AED: 3.67,     
    SAR: 3.75,     
    CNY: 6.40,    
    TRY: 13.5,     
    INR: 75.50,    
    PKR: 277.54    
};

while (condition) {
let userAnswer = await inquirer.prompt(
    [
        {
            name: "from",
            message: chalk.black.bgYellowBright.underline.bold("\nEnter From Currency:"),
            type: "list",
            choices: ["USD", "EUR", "GBP", "CAD", "AUD", "NZD", "AED", "SAR", "CNY", "TRY", "INR", "PKR"]
        },
        {
            name: "to",
            message: chalk.black.bgYellowBright.underline.bold("\nEnter To Currency:"),
            type: "list",
            choices: ["USD", "EUR", "GBP", "CAD", "AUD", "NZD", "AED", "SAR", "CNY", "TRY", "INR", "PKR"]
        },
        {
            name: "amount",
            message: chalk.black.bgCyanBright.underline.bold("\nEnter Your Amount:"),
            type: "number"
        }
    ]
);



let fromAmount = currency[userAnswer.from];    



let toAmount = currency[userAnswer.to];


let amount = userAnswer.amount;


let baseAmount = amount / fromAmount;


let convertAmount = baseAmount * toAmount;


console.log("\n");
console.log(chalk.bgGray.underline.bold(`${userAnswer.amount} ${userAnswer.from} to ${userAnswer.to} is: ${parseFloat(convertAmount.toFixed(2))}`));


let wantMore = await inquirer.prompt(
    [
        {
            name: "more",
            message: chalk.bgRedBright.bold("\nAre you want more Currency Conversion?"),
            type: "confirm",
            default: "faslse"
        }
    ]
);
condition = wantMore.more;

} 
console.log(chalk.bgRed.bold("\nExit"));
