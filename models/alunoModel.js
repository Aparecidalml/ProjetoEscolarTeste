import { DataTypes } from 'sequelize';
import sequelize from '../config/bd.js';

const Aluno = sequelize.define('Aluno', {
  matricula: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    validate: { 
      notEmpty: true 
    } 
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: { 
      notEmpty: true 
    } 
  },
  turma: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: { 
      isEmail: true 
    } 
  }},
  {
    modelName: 'tab_aluno',
    timestamps: false
  }
)

export default Aluno;
