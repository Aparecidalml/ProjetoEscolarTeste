import Aluno from '../models/alunoModel.js'

export const mostrarAlunos = async(req, res) => {
    try {
        const alunos = await Aluno.findAll();
        //res.status(200).json({ msg: 'Alunos encontrados:', alunos });
        res.render('visualizarAluno', {alunos: alunos})
      } catch (error) {
        res.status(500).json({ error: error.message });
      }    
}

export const mostrarAluno = async(req, res) => {
    try {
        const { matricula } = req.params;
        const aluno = await Aluno.findByPk(matricula);
        if (aluno) {
          res.status(200).json({ msg: 'Aluno encontrado:', aluno });
        } else {
          res.status(404).json({ error: 'Aluno não encontrado' });
        }
      } catch (error) {
        res.status(500).json({ error: error.message });
      }
}

export const cadastrarAluno = async(req, res) => {
    try {
        const { matricula, nome, turma, email } = req.body;
        const aluno = await Aluno.create({ matricula, nome, turma, email });
        //res.status(200).json({ msg: 'Aluno cadastrado!', aluno });
        res.redirect('/alunos')
      } catch (error) {
        res.status(400).json({ error: error.message });
      }

}

export const atualizarAluno = async (req, res) => {
    try {
      const { matricula } = req.params;
      const { nome, turma, email } = req.body;
      const aluno = await Aluno.findByPk(matricula);
      if (aluno) {
        aluno.nome = nome;
        aluno.turma = turma;
        aluno.email = email;
        await aluno.save();
        res.status(200).json({ msg: 'Aluno atualizado!', aluno });
      } else {
        res.status(404).json({ error: 'Aluno não encontrado!' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

export const removerAluno = async (req, res) => {
    try {
      const { matricula } = req.params;
      const aluno = await Aluno.findByPk(matricula);
      if (aluno) {
        await aluno.destroy();
        res.status(200).json({ msg: 'Aluno removido!'});
      } else {
        res.status(404).json({ error: 'Aluno não encontrado!' });
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

export const patchAluno = async (req, res) => {
    try {
      const { matricula } = req.params 
      const updates = req.body 
  
      const aluno = await Aluno.findByPk(matricula)
  
      if (!aluno) {
        res.status(404).json({ message: 'Aluno não encontrado!' })
        return
      }
  
      await aluno.update(updates)  
      res.json({ message: 'Aluno atualizado com sucesso!', aluno })

    } catch (error) {
      res.status(500).json({ message: 'Erro ao atualizar aluno!' });
    }
  }