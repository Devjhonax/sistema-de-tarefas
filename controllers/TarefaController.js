import Tarefa from '../models/Tarefa.js';

class TarefaController {
  async listarTodos(req, res) {
    try {
      const tarefas = await Tarefa.findAll();
      res.json(tarefas);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async buscarPorId(req, res) {
    try {
      const id = Number(req.params.id);
      const tarefa = await Tarefa.findByPk(id);
      if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });
      res.json(tarefa);
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  async criar(req, res) {
    try {
      const { titulo, descricao, status } = req.body;
      const novaTarefa = await Tarefa.create({ titulo, descricao, status });
      res.status(201).json(novaTarefa);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }

  async atualizar(req, res) {
    try {
      const id = Number(req.params.id);
      const tarefa = await Tarefa.findByPk(id);
      if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });

      await tarefa.update(req.body);
      res.json(tarefa);
    } catch (error) {
      res.status(400).json({ erro: error.message });
    }
  }

  async deletar(req, res) {
    try {
      const id = Number(req.params.id);
      const tarefa = await Tarefa.findByPk(id);
      if (!tarefa) return res.status(404).json({ erro: 'Tarefa não encontrada' });

      await tarefa.destroy();
      res.status(204).send();
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
}

export default TarefaController;