const { Sequelize, DataTypes} = require('sequelize');
const database = require('../config/db-config');
const Professor = require("../models/professorModel");
const Course = require("../models/courseModel");
const Student = require("../models/studentModel");
const Term = require("../models/termsModel");

database.sync()
    .then(()=>{
        return Professor.findOrCreate({
            where: {
                email: "milos@gmail.com"
            },
            defaults:{
                name: "Milos3",
                surname: "Milosavljevic",
                password: "123"
            }
        })})
        .then(async()=>{
            const profId = await Professor.findOne({
                where: {email:"milos@gmail.com"}
            });
            return profId.id
        })
        .then((id) =>{
            console.log("\n"+id+"\n")
            Course.findOrCreate({
                where: {name: "Math"},
                defaults:{
                    description: "Learn Math",
                    espb: 8,
                    professorId: id
                }            
            })

        })
        .then(()=>{
            Student.findOrCreate({
                where : {email: "andrijailic@gmail.com"},
                defaults: {
                    name: "Andrija",
                    surname: "Ilic",
                    password: "123"
                }
            })
        })
        .then(()=>{
            Term.findOrCreate({
                where:{name:"junski"},
                defaults:{
                    from: "2022/06/13 16:30:59.786",
                    to: "2022/06/23 16:30:59.786"
                }
            })
        })
        .catch((err)=>{
        console.log(err);
    });