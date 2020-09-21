const express = require('express')
const server = express()

const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')

const nunjuncks = require('nunjucks')

nunjuncks.configure('src/views', {
    express: server,
    noCache: true,
})

server
    .use(express.urlencoded({ extended: true }))
    .use(express.static("public"))
    .get("/", pageLanding)
    .get("/study", pageStudy)
    .get("/give-classes", pageGiveClasses)
    .post("/save-classes", saveClasses)
    .listen(3000)