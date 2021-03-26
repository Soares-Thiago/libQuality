import express from 'express';
import mongoose from 'mongoose';
import router from './routes';
import { load } from 'ts-dotenv';
import swaggerUi from 'swagger-ui-express'
import swaggerJsDoc from 'swagger-jsdoc'

const swaggerOptions = {
  swaggerDefinition: {
    info: {
      version: '1.0.0',
      title: 'LibQuality API',
      description: 'Documentation of LibQuality API',
      servers: ["http://localhost:8080"]
    },
  },
  apis: ["./src/routes.ts"]
}

const swaggerDocs = swaggerJsDoc(swaggerOptions)

const env = load({
  STRING_CONNECTION: String
})

mongoose.connect(env.STRING_CONNECTION,
   { 
    useNewUrlParser: true, 
    useUnifiedTopology: true 
  }
)

const app = express();

app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs))

app.use(function(req, res, next) {
    res.setHeader('jwt_token', 'TOKEN')
    res.setHeader('user', 'GITUSERNAME')
    next()
})

app.use(express.json());

app.use(router);

export { app }