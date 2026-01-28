
import { DataTypes } from 'sequelize';


import sequelize from '../db.js';


const Tarefa = sequelize.define('Tarefa', {
 
  titulo: {
    type: DataTypes.STRING,
    allowNull: false
  },
  
  descricao: {
    type: DataTypes.STRING
  },
  
  status: {
    type: DataTypes.STRING
  }
});

export default Tarefa;