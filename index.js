const inquirer =  require("inquirer");
const fs = require('fs');

inquirer.prompt ([
    {
        type: 'input',
        message: 'Please enter your name.',
        name: 'username',
    },
    {
        type: 'input',
        message: 'Where are you from?',
        name: 'location',
    },
    {
        type: 'input',
        message: 'Write out a brief biography.',
        name: 'bio',
    },
    {
        type: 'input',
        message: 'What would you consider your job title?',
        name: 'jobTitle'
    },
    {
        type: 'input',
        message: 'Paste your GitHub profile link.',
        name: 'ghLink'
    },
    {
        type: 'input',
        message: 'Paste your LinkedIn profile link.',
        name: 'liLink'
    }
]) .then(data=> {
    const filename = `${data.username.toLowerCase().split(' ').join('')}.html`;
    const template = 
    `<!DOCTYPE html>
    <html lang="en">
        <head>
            <meta charset="UTF-8" />
            <meta name="viewport" content="width=device-width, initial-scale=1.0" />
            <title>${data.username}'s Portfolio</title>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.3/css/bulma.min.css">
        </head>
        <body>
            <section class="hero is-info is-fullheight">
                <div class="hero-body">
                    <div class="container">
                        <div class="columns">
                            <div class="column">
                                <p class="title is-1">
                                    ${data.username}
                                </p>
                            </div>
                            <div class="column">
                                <p class="title is-2">
                                    ${data.jobTitle}
                                </p>
                            </div>
                        </div>
                        <div class="columns">
                            <div class="column" id="about">
                                <p class="title is-3">About Me</p>
                                <p>I live in ${data.location}</p>
                                <p>${data.bio}</p>
                            </div>
                            <div class="column" id="contact">
                                <p class="title is-3">Contact Me</p>
                                <a href="${data.ghLink}">My GitHub</a><br>
                                <a href="${data.liLink}">My LinkedIn</a><br>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </body>
    </html>`

    fs.writeFile(filename, template, (err) =>
    err ? console.log(err) : console.log('Success!'))
})