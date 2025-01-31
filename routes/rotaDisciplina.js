import express from 'express'
// import Disciplina from '../models/disciplinaModel.js'
import {renderizarForms, mostrarDisciplinas, mostrarDisciplina, cadastrarDisciplina, atualizarDisciplina, removerDisciplina, patchDisciplina} from '../controllers/disciplinaController.js'

const appbd = express()
appbd.use(express.json())

appbd.get('/atualizar/:codigo', renderizarForms)

appbd.get('/visualizar', mostrarDisciplinas)

appbd.get('/visualizar/:codigo', mostrarDisciplina)  

appbd.post('/cadastrar', cadastrarDisciplina)

appbd.put('/atualizar/:codigo', atualizarDisciplina)
  
appbd.delete('/excluir/:codigo', removerDisciplina)

appbd.patch('/patch/:codigo', patchDisciplina)

export default appbd