const swaggerJsdoc = require('swagger-jsdoc');

const options = {
  definition: {
    openapi: '3.0.0',
    info: {
      title: 'OpenStreetMap GeoJSON API',
      version: '1.0.0',
      description: 'API to fetch GeoJSON data from OpenStreetMap based on a bounding box.',
    },
    servers: [
      {
        url: 'http://localhost:3000'
      },
    ],
  },
  apis: ['./app.js'],
};

const swaggerSpec = swaggerJsdoc(options);

module.exports = swaggerSpec;
