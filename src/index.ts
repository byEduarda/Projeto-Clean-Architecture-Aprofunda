import express from 'express';
import cors from 'cors';
import textRoutes from './routes/textRoutes';

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

app.use('/api', textRoutes);

app.listen(PORT, () => {
  console.log(`Servidor rodando com sucesso na porta: ${PORT}`);
});
