const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUi = require('swagger-ui-express');

const swaggerOptions = {
    swaggerDefinition: {
    openapi: '3.0.0',
    info: {
        title: 'AreaSync',
        version: '1.0.0',
        description: 'Swagger API Documentation',
    },
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
