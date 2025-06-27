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
    servers: [
      {
        url: 'http://localhost:5000', // 👈 important for OpenAPI tools like Keploy
      },
    ],
  },
  apis: ['./routes/*.js'], // Adjust path as needed
};

const swaggerSpec = swaggerJSDoc(options);

function swaggerDocs(app) {
  app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));
  console.log('Swagger Docs available at http://localhost:5000/api-docs');

  // ✅ ADD THIS ROUTE:
  app.get('/api-docs-json', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(swaggerSpec);
  });
}

module.exports = swaggerDocs;
