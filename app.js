import express from 'express';
import tarefaRoutes from './routes/tarefaRoutes.js';
import sequelize from './db.js';
import dotenv from 'dotenv';
import morgan from 'morgan'; // 👉 import do morgan

dotenv.config();

const app = express();

// Middleware para logs
app.use(morgan('dev')); // 👉 mostra logs no terminal

// Permite que o servidor entenda JSON
app.use(express.json());

// Usa as rotas
app.use(tarefaRoutes);

// Sincroniza o banco e inicia o servidor
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
  app.listen(process.env.PORT, () => {
    console.log(`Servidor rodando na porta ${process.env.PORT}`);
  });
}).catch((error) => {
  console.error('Erro ao sincronizar o banco:', error);
});