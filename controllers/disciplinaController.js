import Disciplina from '../models/disciplinaModel.js'

export const mostrarDisciplinas = async (req, res) => {
    try {
        const disciplinas = await Disciplina.findAll()
        //res.status(200).json({msg: 'Disciplinas encontradas: ', disciplinas})
        res.render('visualizarDisciplina', {disciplinas: disciplinas})
      } catch (error) {
        res.status(500).json({ error: error.message })
      }   
}

export const mostrarDisciplina = async (req, res) => {
    try {
        const { codigo } = req.params
        const disciplina = await Disciplina.findByPk(codigo)
        if (disciplina) {
       // res.status(200).json({msg: 'Disciplina encontrada: ', disciplina})
        res.render('visualizarDisciplina', {disciplina: disciplina})
        } else {
        res.status(404).json({ error: 'Disciplina não encontrada' })
        }
    } catch (error) {
        res.status(500).json({ error: error.message })
    }
}

export const cadastrarDisciplina = async(req, res) => {
    try {
        const { codigo, nome, ch, professor } = req.body
        const disciplina = await Disciplina.create({ codigo, nome, ch, professor })
        //res.status(200).json({msg: 'Disciplinas adicionada com sucesso!: ', disciplina})
        res.redirect('/disciplinas/visualizar')
      } catch (error) {
        res.status(400).json({ error: error.message })
      }

}

export const atualizarDisciplina = async (req, res) => {
    try {
      const { codigo } = req.params
      const { nome, ch, professor } = req.body
      const disciplina = await Disciplina.findByPk(codigo)
      if (disciplina) {
        // disciplina.nome = nome;
        // disciplina.ch = ch;
        // disciplina.professor = professor;
      //  await disciplina.save();
      // await disciplina.update({nome, ch, professor})
      await disciplina.update({nome, ch, professor}, {where: {codigo: codigo}})
       //res.status(200).json({msg: 'Disciplina Atualizada com sucesso!: ', disciplina})
       res.render('editarDisciplina', {disciplina: disciplina})
      } else {
        res.status(404).json({ error: 'Disciplina não encontrada!' })
      }
    } catch (error) {
      res.status(500).json({ error: error.message })
    }
}

export const renderizarForms = async (req, res) => {
  try {
      const { codigo } = req.params;
      const disciplina = await Disciplina.findByPk(codigo);
      if (disciplina) {
          res.render('editarDisciplina', { disciplina: disciplina });
      } else {
          res.status(404).json({ error: 'Disciplina não encontrada!' });
      }
  } catch (error) {
      res.status(500).json({ error: error.message });
  }
}

export const removerDisciplina = async (req, res) => {
    try {
      const { codigo } = req.params;
      const disciplina = await Disciplina.findByPk(codigo);
      if (disciplina) {
        await disciplina.destroy();
        res.status(200).json({msg: 'Disciplina removida com sucesso!: '})
      } else {
        res.status(404).json({ error: 'Disciplina não encontrada!' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

export const patchDisciplina = async (req, res) => {
    try {
      const { codigo } = req.params 
      const updates = req.body   
      const disciplina = await Disciplina.findByPk(codigo)  
      if (!disciplina) {
        res.status(404).json({ message: 'Disciplina não encontrada.' })
        return
      }  
      await disciplina.update(updates)  
      res.json({ message: 'Disciplina atualizada com sucesso!', disciplina })
    } catch (error) {
      console.error('Erro ao atualizar disciplina!', error);
      res.status(500).json({ message: 'Erro ao atualizar disciplina!' });
    }
  }
