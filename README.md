# 2022-js-be-internship

### **Internship task specification:** College organization API

Depending on the type of user, the system has different functionalities. Types of users are students and professors.

## **Basic system functionalities:**

### **All users have access to the system's basic functions**
- logging in
- registration
- reset password
- list of courses
- list of exams
- list of students
- list of professors
- exam results
- personal data changes

### **Students have access to the following functionalities:**
- exam registration
- list of courses they passed
- list of courses they haven’t passed
- number of points (espb)
- registered exams

### **Professors have access to the following functionalities:**
- list of courses for professor
- adding grade to an exam
- course creation
- course update

-------------------------------------------------------------------------------------------------------------------

App setup: 
- npm init -y
- npm install express (current version is 4.18.2 (npm install express@4.18.2))
- npm install --save-dev nodemon (current version is 2.0.20)
- --in package.json in scripts make this script "start": "nodemon index.js" and make index.js file in our project
- npm start
 
Jest setup:
- npm install --save-dev jest (current version is 29.2.2 (npm install jest@29.2.2))
- To run a test (npm test)
