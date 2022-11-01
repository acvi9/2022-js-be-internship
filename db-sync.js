const database = require("./config/db-config");
const Professor = require("./models/professorModel");
const Course = require("./models/courseModel");
const Student = require("./models/studentModel");
const Term = require("./models/termsModel");

Professor.hasMany(Course);

// sync all models with database
database.sync({force: true}).then(() => {
    console.log("Database synced");
    database.close();
}).catch((err) => {
    console.log(err);
});