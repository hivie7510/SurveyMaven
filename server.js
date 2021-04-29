const bodyParser = require('body-parser')
const express = require('express')
const router = require('express').Router()
const SingleAnswerController = require('./controllers/singleAnswerController')
const app = express()
const port = 3000

router.post('/tf', new SingleAnswerController().build)
app.use(bodyParser.json({ extended: true }))
app.use(router)

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
})
