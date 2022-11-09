const database = require('./config/db-config');
const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');
require('dotenv').config();
const app = require('./app');
const port = process.env.PORT || 3000;
const host = process.env.DB_HOST || 'localhost';

// Connecting to Database
const connect = async () =>{
  await database.authenticate()
    .then(() => {
      console.log(`Connection has been established successfully. ${database.config.database}`);

    })
    .catch((error) => {
      console.error('Unable to connect to the database: ', error);
    });
}
connect();


app.listen(port, host, () => {
  console.log(`Express app is running on ${host}:${port}`);
});




const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'College Organization API',
      version: '1.0.0',
      description: 'A simple Express College Organization API.',
    },
    servers: [
      {
        url: 'http://localhost:3000',
      },
    ],
  },
  apis: ['./index.js', './models/professorModel.js', './models/studentModel.js', './models/courseModel.js', './models/termsModel.js',
    './routes/professorRoutes.js', './routes/studentRoutes.js', './routes/courseRoutes.js', './routes/termsRoutes.js',
    './models/examModel.js','./routes/loginRoutes.js'],
}

const specs = swaggerJSDoc(options);
app.use('/docs', swaggerUI.serve, swaggerUI.setup(specs));

app.get('/swagger-example', (req, res) => {
  res.json({
    'id': 'a0s9djaosa',
    'name': 'name 1',
    'exampleNumber': 2
  });
});

module.exports =  {
  host,
  port
};