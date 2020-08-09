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
    }
]

function pageLanding(req, res) {
    return res.render("index.html")
}

function pageStudy(req, res) {
    return res.render("study.html", { proffys })
}

function pageGiveClasses(req, res) {
    return res.render("give-classes.html")
}

const express = require("express")
const server = express()
const nunjucks = require("nunjucks")

//configurar nunjucks
nunjucks.configure("src/views", {
    express: server,
    noCache: true
})

server
//configurar arquivos estáticos (css, scripts, imagens)
server.use(express.static("public"))
//rotas da aplicação
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)

.listen(5500)