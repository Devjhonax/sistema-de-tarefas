// Importa o tipo de dados do Sequelize
import { DataTypes } from 'sequelize';

// Importa a instância de conexão com o banco de dados
import sequelize from '../db.js';

// Define o modelo 'Tarefa' com os campos da tabela
const Tarefa = sequelize.define('Tarefa', {
  // Campo 'titulo' do tipo string e obrigatório
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  // Campo descricao do tipo string 
  descricao: {
    type: DataTypes.STRING
  },
  // Campo status do tipo string 
  status: {
    type: DataTypes.STRING
  }
});

// Exporta o modelo para ser usado nos controllers e rotas
export default Tarefa;