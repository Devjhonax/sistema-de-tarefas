// Importa o controlador que tem os métodos para lidar com tarefas
import TarefaController from '../controllers/TarefaController.js';

// Cria uma instância do controlador
const controller = new TarefaController();

// Função que busca e mostra as tarefas no terminal
async function listarTarefasNoTerminal() {
  try {
    // Simula a resposta da API com uma função que mostra os dados no terminal
    const req = {}; 
    const res = {
      json: (tarefas) => {
        // Mostra as tarefas no terminal
        tarefas.forEach(tarefa => {
          console.log('ID:', tarefa.id);
          console.log('Título:', tarefa.titulo);
          console.log('Descrição:', tarefa.descricao);
          console.log('Status:', tarefa.status);
          console.log('------------------');
        });
      },
      status: (codigo) => ({
        json: (erro) => console.error(`Erro ${codigo}:`, erro)
      })
    };

    // Chama o método que lista as tarefas
    await controller.listarTodos(req, res);
  } catch (error) {
    console.error('Erro ao listar tarefas:', error.message);
  }
}

// Executa a função
listarTarefasNoTerminal();