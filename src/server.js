//yarn run dev

//servidor
const express = require("express")
const server = express()

const { pageLanding, pageStudy, pageGiveClasses } = require("./pages")

//configurar nunjucks
const nunjucks = require("nunjucks")
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

//Início e configuração do servidor
server
//Configuração dos arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))
//Rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//Start do servidor
.listen(5500)