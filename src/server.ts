import app from './index';
import { connectToMongo } from './infra/database/mongoConnect';

const PORT = 3000;

connectToMongo().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
  });
}).catch((error: Error) => {
  console.error('❌ Erro ao conectar no MongoDB:', error);
});
