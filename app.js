// Importa o Express, as rotas e o banco de dados
import express from 'express';
import tarefaRoutes from './routes/tarefaRoutes.js';
import sequelize from './db.js'; // importa a conexão com o banco

// Cria a aplicação
const app = express();

// Permite que o servidor entenda o JSON
app.use(express.json());

// Usa as rotas definidas em tarefaRoutes
app.use(tarefaRoutes);

// Sincroniza o banco e inicia o servidor
sequelize.sync().then(() => {
  console.log('Banco de dados sincronizado');
  app.listen(3000, () => {
    console.log('Servidor rodando na porta 3000');
  });
}).catch((error) => {
  console.error('Erro ao sincronizar o banco:', error);
});