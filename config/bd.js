import { Sequelize } from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: './database/apidb.sqlite'
})

sequelize.authenticate()  
  .then(() => {
    console.log('Conexão com BD estabelecida com sucesso!')
  })
  .catch((error) => {
    console.error('Erro ao conectar ao banco de dados!', error)
  });

sequelize.sync({ force: false })    
  .then(() => {
    console.log('Tabelas sincronizadas com sucesso no BD!')
  })
  .catch((error) => {
    console.error('Erro ao sincronizar as tabelas no BD!', error)
  })

export default sequelize
