import Tarefa from '../models/Tarefa.js';

class TarefaController {
  // Lista todas as tarefas
  async listarTodos(req, res) {
    try {
      const tarefas = await Tarefa.findAll();
      res.json(tarefas);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  // Busca uma tarefa pelo ID
  async buscarPorId(req, res) {
    try {
      const id = parseInt(req.params.id);
      const tarefa = await Tarefa.findByPk(id);
      if (tarefa) {
        res.json(tarefa);
      } else {
        res.status(404).send('Tarefa não encontrada');
      }
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  // Cria uma nova tarefa
  async criar(req, res) {
    try {
      const { titulo, descricao, status } = req.body;
      const novaTarefa = await Tarefa.create({ titulo, descricao, status });
      res.status(201).json(novaTarefa);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }

  // Atualiza uma tarefa existente
  async atualizar(req, res) {
    try {
      const id = parseInt(req.params.id);
      const tarefa = await Tarefa.findByPk(id);
      if (tarefa) {
        await tarefa.update(req.body);
        res.json(tarefa);
      } else {
        res.status(404).send('Tarefa não encontrada');
      }
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }

  // Deleta uma tarefa
  async deletar(req, res) {
    try {
      const id = parseInt(req.params.id);
      const tarefa = await Tarefa.findByPk(id);
      if (tarefa) {
        await tarefa.destroy();
        res.send('Tarefa deletada');
      } else {
        res.status(404).send('Tarefa não encontrada');
      }
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
}

export default TarefaController;