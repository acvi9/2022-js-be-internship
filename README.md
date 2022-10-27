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

## Application Setup:

#### Initialize Project
```
npm init -y
```

### Install ExpressJS and Nodemon
``` 
npm install express 
npm install --save-dev nodemon
```

### Configure Nodemon
Change the start script tag in ```package.json``` 
```
{
   "start": "nodemon {{fileName}}"
}
```

### Install Jest

```
npm install --save-dev jest
```


## Versions:

- ExpressJS (4.18.2)
- Nodemon (2.0.20)
- Jest (29.2.2)
