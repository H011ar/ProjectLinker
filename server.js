/********************************************************************************
*  WEB322 – Assignment 02
* 
*  I declare that this assignment is my own work in accordance with Seneca's
*  Academic Integrity Policy:
* 
*  https://www.senecapolytechnic.ca/about/policies/academic-integrity-policy.html
* 
*  Name:TOYIN ODOFIN Student ID: ___152522223___________ Date: __10/04/2024____________
*
********************************************************************************/



const express = require("express");
const projectData = require("./modules/projects");

const app = express();


app.get("/", (req, res) => {
    res.send("Assignment 2:  Student Name: TOYIN ODOFIN - Student Id: 152522223");
});

app.get("/solutions/projects", (req, res) => {
    res.json(projectData.getAllProjects());
});

app.get("/solutions/projects/id-demo", (req, res) => {
    const project = projectData.getProjectById(6);

    if (project) {
        res.json(project);
    } else {
        res.status(404).send("There is no project with the ID");
    }
});

app.get("/solutions/projects/sector-demo", (req, res) => {
    const projects = projectData.getProjectsBySector("agriculture");

    if (projects.length > 0) {
        res.json(projects);
    } else {
        res.status(404).send("There are no projects with the given sector");
    }
});

projectData.initialize().then(() => {
    app.listen(3000, () => {
        console.log(`Server running at http://localhost:3000`);
    });
}).catch(err => {
    console.error(err);
});

