import { DataTypes } from 'sequelize';
import sequelize from '../config/bd.js';

const Disciplina = sequelize.define('Disciplina', {
  codigo: {
    type: DataTypes.STRING,
    primaryKey: true,
    allowNull: false,
    unique: true,
    validate: { 
      notEmpty: true 
    } 
  },
  nome: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      notEmpty: true,
    }
  },
  ch: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: true
    }
  },
  professor: {
    type: DataTypes.STRING,
    allowNull: true
  }
},
  {
    modelName: 'tab_disciplina',
    timestamps: false
  }
)

export default Disciplina;
