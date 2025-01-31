import express from 'express'
// import Aluno from '../models/alunoModel.js'
import {mostrarAlunos, mostrarAluno, cadastrarAluno, atualizarAluno, removerAluno, patchAluno} from '../controllers/alunoController.js'

const appbd = express()
appbd.use(express.json())

appbd.get('/', mostrarAlunos)

appbd.get('/:matricula', mostrarAluno)

appbd.post('/cadastrar', cadastrarAluno)

appbd.put('/:matricula', atualizarAluno)
  
appbd.delete('/:matricula', removerAluno)

appbd.patch('/:matricula', patchAluno)


export default appbd