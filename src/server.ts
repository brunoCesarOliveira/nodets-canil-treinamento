// #002 Criando um servidor
// Baixando as dependências
import express from "express"
import dotenv from "dotenv"
import mustache from "mustache-express"
import path from "path"
import mainRouters from "./routers/index"

dotenv.config()

// Configurando o mustache
const server = express()
server.set("view engine", "mustache")
server.set("views", path.join(__dirname, "views"))
server.engine("mustache", mustache())

// Configurando a pasta publica
server.use(express.static(path.join(__dirname, "../public")))

// Configurando as Rotas
server.use(mainRouters)


server.use((req, res) => {
  res.render("pages/404")
})

// Configurando o servidor com a porta 4000
server.listen(process.env.PORT)
