const swaggerJsDoc = require('swagger-jsdoc');

const swaggerOptions = {
    swaggerDefinition: {
    // openapi: '3.0.0',
    info: {
        title: 'AreaSync',
        version: '1.0.0',
        description: 'Swagger API Documentation',
        contact: {
            name: 'LeanofGod',
            email: 'godlyn.kikissagbe@epitech.eu'
        },
    },
    },
    apis: ['./routes/*.js'],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);

module.exports = swaggerDocs;