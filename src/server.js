//yarn run dev

//Dados
const proffys = [
    {
        name: "Diego Fernandes",
        avatar: "https://avatars2.githubusercontent.com/u/2254731?s=460&amp;u=0ba16a79456c2f250e7579cb388fa18c5c2d7d65&amp;v=4",
        whatsapp: "899876543534",
        bio: "Entusiasta das melhores tecnologias de química avançada.<br><br>Apaixonado por explodir coisas em laboratório e por mudar a vida das pessoas através de experiências. Mais de 200.000 pessoas já passaram por uma das minhas explosões.",
        subject: "Química",
        cost: "20",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Marcelo d'Almeida",
        avatar: "https://scontent.fnat1-1.fna.fbcdn.net/v/t31.0-8/886821_1019851494756720_486201231599763764_o.jpg?_nc_cat=106&_nc_sid=09cbfe&_nc_ohc=GNRP8LDlQegAX-TNiqj&_nc_ht=scontent.fnat1-1.fna&oh=f6377a0896646da401b55e01597e6787&oe=5F54E48C",
        whatsapp: "899876543534",
        bio: "Amo machine learning e ver a Nami lambendo o próprio bucho.<br><br>Infelizmente não vou poder te dar aula porque tô ocupado sendo CTO do Nubank.",
        subject: "Nada",
        cost: "999999",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    },
    {
        name: "Rebeca Nara",
        avatar: "https://scontent.fnat1-1.fna.fbcdn.net/v/t31.0-8/28060952_1932515716776388_8567619608917130283_o.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=FWKZPmPgKFsAX-pmksm&_nc_oc=AQlmzFTlMflo7FZ1DGZ_L3qFVyxN-uMUd_8Ivsi1PvN9ArYXBDVk1iaZM0jFhgRnpko&_nc_ht=scontent.fnat1-1.fna&oh=53aee372cb79654e1b1629d4ad1cf72c&oe=5F56093D",
        whatsapp: "899876543534",
        bio: "Ainda tenho que pensar em algo criativo.",
        subject: "Engenharia",
        cost: "999999",
        weekday: [0],
        time_from: [720],
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação Física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//Funcionalidades
function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    const filter = req.query
    return res.render("study.html", { proffys, filter, subjects, weekdays })
}

function pageGiveClasses(req, res) {
    const dados = req.query
    return res.render("give-classes.html", { filter, subjects, weekdays })
}

//servidor
const express = require("express")
const server = express()

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