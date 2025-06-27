const swaggerJSDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'Manhwa Manager API',
      version: '1.0.0',
      description: 'API documentation for managing Manhwas',
    },
  },
  apis: ['./routes/*.js'], // Update this if your routes are in another file
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log('Swagger Docs available at http://localhost:5000/api-docs');

}

module.exports = swaggerDocs;