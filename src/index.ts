import express, { Application } from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { authMiddleware } from './shared/middlewares/authMiddleware';
import authRoutes from './routes/authRoutes';
import libraryRoutes from './routes/libraryRoutes';

dotenv.config();

const app: Application = express();
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI;

if (!MONGO_URI) {
  throw new Error('A variável MONGO_URI não está definida no .env');
}

app.use(express.json());
app.use(cors());

mongoose.connect(MONGO_URI)
  .then(() => {
    console.log('🟢 Conectado ao MongoDB Atlas com sucesso');

    app.listen(PORT, () => {
      console.log(`🚀 Servidor rodando com sucesso em http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao conectar ao MongoDB:', error);
  });


app.use('/auth', authRoutes);;
app.use('/', libraryRoutes);

export default app;
