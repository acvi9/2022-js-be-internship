const database = require("./config/db-config");
const Professor = require("./models/professorModel");

//za kasnije :)
//Professor.hasMany(Course);


database.sync({alter:true})
    .then(()=>{
        console.log("Models created!");
    }).catch((err)=>{
        console.log(err);
    });