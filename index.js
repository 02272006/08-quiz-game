#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
console.log(chalk.white.bold("\t ARE YOU AN INTROVERT? TAKE THE QUIZ AND I'LL TELL YOU! \n"));
console.log(chalk.blue("\t If you get atleast 3 questions right, YOU'RE AN INTROVERT! \n"));
let quiz = await inquirer.prompt([
    {
        name: "question1",
        type: "list",
        message: chalk.yellow.italic("Being around people makes me feel.."),
        choices: [
            "Energized for awhile",
            "Exhausted",
            "Like I'm alive!",
        ]
    },
    {
        name: "question2",
        type: "list",
        message: chalk.yellow.italic("When given a choice between working as part of a team or working as a group,I would prefer to..."),
        choices: [
            "Work as a part of small group.",
            "work with as many people as possible.",
            "Work by myself.",
        ]
    },
    {
        name: "question3",
        type: "list",
        message: chalk.yellow.italic("During parties or social gatherings, I tend to..."),
        choices: [
            "spend time with few people I know.",
            "Talk to as many people as I can.",
            "Sit in the corner.",
        ]
    },
    {
        name: "question4",
        type: "list",
        message: chalk.yellow.italic("When I'm dealing with a personal problem, I prefer to..."),
        choices: [
            "Solve it on my own!",
            "Call my close friend and discuss it with them.",
            "Talk about it with people and seek advice.",
        ]
    },
    {
        name: "question5",
        type: "list",
        message: chalk.yellow.italic("On the topic of public speaking..."),
        choices: [
            "It's not my thing but I'll try",
            "I get super nervous!",
            "I'll feel proud to get a chance!",
        ]
    }
]);
let result = 0;
switch (quiz.question1) {
    case "Exhausted":
        console.log(chalk.green("YES!"));
        ++result;
        break;
    default:
        console.log(chalk.red("NOPE!"));
}
switch (quiz.question2) {
    case "Work by myself.":
        console.log(chalk.green("YES!"));
        ++result;
        break;
    default:
        console.log(chalk.red("NOPE!"));
}
switch (quiz.question3) {
    case "Sit in the corner.":
        console.log(chalk.green("YES!"));
        ++result;
        break;
    default:
        console.log(chalk.red("NOPE!"));
}
switch (quiz.question4) {
    case "Solve it on my own!":
        console.log(chalk.green("YES!"));
        ++result;
        break;
    default:
        console.log(chalk.red("NOPE!"));
}
switch (quiz.question5) {
    case "I get super nervous!":
        console.log(chalk.green("YES!"));
        ++result;
        break;
    default:
        console.log(chalk.red("NOPE!"));
}
