//const express = require('express');


module.exports = {
    //Courses
    listAllCourses: [],
    findCourseByID: [],
    createCourse: ["professor"],
    deleteCourse: ["professor"],
    updateCourse: ["professor"],
    //Terms
    listAllTerms: ["student","professor"], 
    findTermByID: ["student","professor"], 
    createTerm: ["professor"], 
    deleteTerm: ["professor"], 
    updateTerm: ["professor"],
    //Professors
    listAllProfessors: [],
    findProfessorByID: [],
    createProfessor: ["professor"],
    deleteProfessor: ["professor"],
    updateProfessor: ["professor"],
    //Students
    listAllStudents: ["professor"],
    findStudentByID: ["student","professor"],
    createStudent: ["professor"],
    deleteStudent: ["professor"],
    updateStudent: ["student","professor"],
    //Attendance
    createAttendance: ["professor"],
    deleteAttendance: ["professor"],
    listStudentsOnCourse: ["professor"],
    listCoursesOfStudent: ["student","professor"],
    //Exams
    listStudentExams: [],
    listAllExams: [],
    findExamByID: [],
    createExam: [],
    updateExam: [],
    deleteExam: [],
    examAnalytics: []
}