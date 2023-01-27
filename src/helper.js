const fs = require('fs');

// generate HTML file
function createHTML() {};

// adds doctype, open html, full head, open body, full nav, and open main
createHTML.prototype.openTags = () => {
    fs.appendFile('index.html', "<!DOCTYPE html>\n<html lang='en'>\n<head>\n<meta charset='UTF-8'>\n<meta name='viewport' content='width=device-width, initial-scale=1.0'>\n<link rel='stylesheet' href='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/css/bootstrap.min.css'>\n<title>Team Profile</title>\n</head>\n<body class='vh-100'>\n<nav class='navbar bg-info-subtle d-flex justify-content-center align-items-center h-25'>\n<div>\n<span class='navbar-brand mb-0 h1 fs-2'>My Team</span>\n</div>\n</nav>\n<main class='container d-flex justify-content-evenly align-items-center flex-wrap h-75'>\n", (err) => {
        err ? console.error(err) : console.log('HTML file initiated');
    });
};

// creates employee cards under main
createHTML.prototype.createManagerCard = (name, id, email, officeNum) => {
    fs.appendFile('index.html', `<div class='card shadow' style='width: 18rem;'>\n<div class='card-body'>\n<h5 class='card-title'>${name}</h5>\n<h6 class='card-subtitle mb-2 text-muted'>Manager</h6>\n<ul class='list-group list-group-flush'>\n<li class='list-group-item'>ID: ${id}</li>\n<li class='list-group-item'>Email: <a href='#'>${email}</a></li>\n<li class='list-group-item'>Office Number: ${officeNum} </li>\n</ul>\n</div>\n</div>\n`, (err) => {
        err ? console.error(err) : console.log(`Manager card created successfully`)
    });
};

createHTML.prototype.createEngineerCard = (name, id, email, gitHub) => {
    fs.appendFile('index.html', `<div class='card shadow' style='width: 18rem;'>\n<div class='card-body'>\n<h5 class='card-title'>${name}</h5>\n<h6 class='card-subtitle mb-2 text-muted'>Engineer</h6>\n<ul class='list-group list-group-flush'>\n<li class='list-group-item'>ID: ${id}</li>\n<li class='list-group-item'>Email: <a href='#'>${email}</a></li>\n<li class='list-group-item'>GitHub: <a href='https://www.github.com/${gitHub}'>${gitHub}</a></li>\n</ul>\n</div>\n</div>\n`, (err) => {
        err ? console.error(err) : console.log(`Manager card created successfully`)
    });
};

createHTML.prototype.createInternCard = (name, id, email, school) => {
    fs.appendFile('index.html', `<div class='card shadow' style='width: 18rem;'>\n<div class='card-body'>\n<h5 class='card-title'>${name}</h5>\n<h6 class='card-subtitle mb-2 text-muted'>Intern</h6>\n<ul class='list-group list-group-flush'>\n<li class='list-group-item'>ID: ${id}</li>\n<li class='list-group-item'>Email: <a href='#'>${email}</a></li>\n<li class='list-group-item'>School: ${school}</li>\n</ul>\n</div>\n</div>\n`, (err) => {
        err ? console.error(err) : console.log(`Manager card created successfully`)
    });
};

// close main, full script, close body, close html
createHTML.prototype.closeTags = () => {
    fs.appendFile('index.html', "</main>\n<script src='https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha1/dist/js/bootstrap.bundle.min.js'></script>\n</body>\n</html>", (err) => {
        err ? console.error(err) : console.log('HTML file finished')
    });
};

module.exports = createHTML;