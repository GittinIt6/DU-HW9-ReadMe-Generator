// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

// TODO: Create an array of questions for user input

const questions = [
    {
        type: 'input',
        message: "What is the title of your application?",
        name: 'title',
        default:'Just a Title',
    },
    {
        type: 'input',
        message: "Provide a description of your application:",
        name: 'description',
        default:'Just a Description',
    },
    {
        type: 'input',
        message: "Provide usage or installation instructions:",
        name: 'instructions',
        default:'Do some things',
    },
    {
        type: 'input',
        message: "Who would be a user of this application?",
        name: 'userType',
        default:'Application Programmer',
    },
    {
        type: 'input',
        message: "Should the user have technical knowledge?",
        name: 'techKnowledge',
        default:'Yes',
    },
    {
        type: 'checkbox',
        message: "Select the technology that your site uses:",
        name: 'technologies',
        choices:['HTML','CSS','JavaScript','node.js','bootstrap','Moment','External API','Other'],
    },
    {
        type: 'input',
        message: "Please explain where in the revision history this application:",
        name: 'revHistory',
        default:'Initial deployment',
    },
    {
        type: 'input',
        message: "How can someone contribute to this project?",
        name: 'contribute',
        default:'e-mail me',
    },
    {
        type: 'checkbox',
        message: "Choose a license:",
        name: 'license',
        choices:['None','MIT License','Apache License 2.0','GNU General Public License 2.0','Other'],
    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`./output/${fileName}`, data, (err) => {
        if (err)
          console.log(err);
        else {
          console.log("File written successfully\n");
          console.log("The written has the following contents:");
          console.log(fs.readFileSync("./output/readme.md", "utf8"));
        };
    });
};
// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((response) => {
        // response.confirm === response.password,
        // console.log(response)
        // let names = questions.map(({ name }) => name).join(', ');
        const { title, description, instructions, userType, techKnowledge, technologies, revHistory, contribute, license } = response;
        let readmeData = `<!DOCTYPE html>
        ${title}
        ${description}, 
            ${instructions}, 
                ${userType}, 
                    ${techKnowledge}, 
                        ${technologies}, 
                            ${revHistory}, 
                                ${contribute}, 
                                    ${license}
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>week 9 mini project</title>
        </head>
        <body>
        Name: {username} <br>
        Location: {location} <br>
        Bio: {bio} <br>
        <a href="{linkedin}">LinkedIn URL</a> <br>
        <a href="{github}">GitHub URL</a> <br>
        </body>
        </html>`;
        writeToFile("readme.md", readmeData);
    });
};

// Function call to initialize app
init();