import express from 'express';
import mongoose from 'mongoose';
import router from './routes';
import { load } from 'ts-dotenv';

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
app.use(function(req, res, next) {
    res.setHeader('jwt_token', 'TOKEN')
    res.setHeader('user', 'GITUSERNAME')
    next()
})
app.use(express.json());
app.use(router);

export { app }