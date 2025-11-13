import express from 'express';
import TarefaController from '../controllers/TarefaController.js';

// Cria o roteador
const router = express.Router();

// Cria uma instância do controlador
const controller = new TarefaController();

// Rota inicial
router.get('/', (req, res) => {
  res.send('Bem-vindo às suas tarefas diárias.');
});

// Listar todas as tarefas
router.get('/tarefas', async (req, res) => {
  await controller.listarTodos(req, res);
});

// Buscar uma tarefa por ID
router.get('/tarefas/:id', async (req, res) => {
  await controller.buscarPorId(req, res);
});

// Criar uma nova tarefa
router.post('/tarefas', async (req, res) => {
  await controller.criar(req, res);
});

// Atualizar uma tarefa
router.put('/tarefas/:id', async (req, res) => {
  await controller.atualizar(req, res);
});

// Deletar uma tarefa
router.delete('/tarefas/:id', async (req, res) => {
  await controller.deletar(req, res);
});

export default router;