import express from 'express';
import tarefaRoutes from './routes/tarefaRoutes.js';
import sequelize from './db.js';
import dotenv from 'dotenv';
import morgan from 'morgan';
import cors from 'cors';

dotenv.config();

const app = express();

app.use(morgan('dev'));
app.use(express.json());
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type']
}));

app.use('/', tarefaRoutes);

sequelize.sync()
  .then(() => {
    app.listen(process.env.PORT || 3000, () => {
      console.log(`Servidor rodando na porta ${process.env.PORT || 3000}`);
    });
  })
  .catch((error) => {
    console.error('Erro ao sincronizar o banco:', error);
  });

export default app;