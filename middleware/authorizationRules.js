const express = require('express');

//get student by id, update student
const listAllProfessors = (req,res,email) => {
    return true;
}

const findStudentByID = (req,res,email) => {
    console.log("u find studentu smo");
    const id = email.match(/(\d+)/)[0];
    console.log("id ", id);
    if(id == req.params.id)
        return true;
    else 
        return false;
}

const listAllTerms = (req,res,email) => {
    return true;
}

module.exports = {
    student: {
        findStudentByID,
    },
    professor: {
        listAllTerms,findStudentByID
    }
}