import express, { Application } from 'express';
import cors from 'cors'; 
import libraryRouter from './routes/libraryRouter';

const app: Application = express();
const PORT = 3000;

app.use(express.json()); 
app.use(cors());

app.use(libraryRouter);


export default app;
