import express from "express"
import path from "path"
import rotaAluno from './routes/rotaAlunos.js'
import rotaDisciplina from './routes/rotaDisciplina.js'
import sequelize from './config/bd.js'
import dotenv from 'dotenv';

dotenv.config();

const app = express()
const port = 3000
const host = "localhost"

app.use(express.json());

app.use(express.urlencoded({ extended: true }))

app.use(express.static(path.resolve('public')))

app.set('view engine', 'ejs')
app.set('views', './views')

app.use('/alunos', rotaAluno)
app.use('/disciplinas', rotaDisciplina)

app.get("/", (req, res) => {
    res.sendFile(path.resolve("./public/index.html"));
})

app.listen(port, host, () => {
    console.log(`Acesso ao servidor: http://${host}:${port}`)
})

/*app.listen(process.env.port, process.env.host, () => {
    console.log(`Acesso ao servidor: http://${process.env.host}:${process.env.port}`)
})*/
