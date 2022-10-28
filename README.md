# **<p align=center>College Organization API</p>**

<p align=center>An API which provides the relevant functionalities to all College stakeholders.</p><br>

## **Project Features**

There are two types of users, those being **students** and **professors**. Depending on the type of user, the system will provide different functionalities. 

### **All users will have the ability to:**
- log in
- register
- reset password
- list all students / professors / exams / courses
- check exam results
- change personal data

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
<br>

## **Languages & Tools**
The API is built in **JavaScript** (with **ESLint** assistance) with the **ExpressJS** framework for **NodeJS**. The database consists of **MySQL** and **Sequelize** as the ORM. Testing is done with **Jest**, and API documentation is handled by **Swagger**.
<p>
   <a href="https://www.javascript.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" width="30px" alt="JavaScript"></a>
   <a href="https://nodejs.org/en/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" width=30 alt="NodeJS"></a>
   <a href="https://expressjs.com/"><img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" width="30px" alt="Express"></a>
   <a href="https://www.mysql.com/"><img src="https://img.icons8.com/color/48/000000/mysql-logo.png" width=30 alt="MySQL"></a>
   <a href="https://sequelize.org/"><img src="https://pics.freeicons.io/uploads/icons/png/17839680241551942828-512.png" width=30 alt="Sequelize"></a>
      <a href="https://jestjs.io/"><img src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/24/000000/external-jest-can-collect-code-coverage-information-from-entire-projects-logo-color-tal-revivo.png" width=30 alt="Jest"></a>
   <a href="https://swagger.io/"><img src="https://cdn.icon-icons.com/icons2/2107/PNG/96/file_type_swagger_icon_130134.png" width=30 alt="Swagger"></a>
</p><br>


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
