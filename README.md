# **<p align=center>College Organization API</p>**

<p align=center>An API which provides the relevant functionalities to all College stakeholders.</p><br>

## **Project Features**

There are two types of users, those being **students** and **professors**. Depending on the type of user, the system will provide different functionalities. Students and professors will certain naming standards when it comes to their email adresses:
- Professors email usernames will be made from their names and surnames, separated by the dot, and followed by unique number (all lowercase). Example -> john.johnson123@email.com
- Student email usernames will be made from their names, surnames, word "student", all separated by the dot, and followed by unique number (all lowercase). Example -> john.johnson.student123@email.com

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

**1 -** Clone repository<br>
**2 -** Create ***.env*** and configure your password:
```
DB_NAME = "college_organization"
DB_USERNAME = "root"
DB_PASSWORD = "{{ YOUR_PASSWORD }}"
DB_HOST = "localhost"
DB_DIALECT = "mysql"
PORT = 3000
JWT_SECRET_KEY = "my$ecretkeY*2"
BCRYPT_SALT_ROUNDS = 10
```
**3 -** Create database:

```sql
CREATE SCHEMA `college_organization` ;
```
**4 -** Start database in MySQL Workbench<br>
**5 -** Run application setup script ```npm run app-setup```<br>



## Versions:

- NodeJS (16.0.0 + )
- ExpressJS (4.18.2)
- Nodemon (2.0.20)
- Jest (29.2.2)
- Swagger-jsdoc (6.2.5)
- Swagger-ui-express (4.5.9)
