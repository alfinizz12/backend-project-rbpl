// import module files
import express from 'express';
import cors from 'cors';
import startServer from './startServer.js';
import cookieParser from 'cookie-parser';
import routes from './routes/api.js'
import dotenv from 'dotenv';

// using app
const app = express();
dotenv.config();

app.use(cors());
app.use(express.json());
app.use(cookieParser());

// using routes
routes(app);

// starting server - sync - authenticate
startServer(app);

