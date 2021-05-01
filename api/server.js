const bodyParser = require('body-parser')
const express = require('express')
const Container = require('./config/container')
const router = require('express').Router()
const definitions = require('./config/config')
const SurveyController = require('./controllers/surveyController')
const SurveyRepository = require('./repositories/surveyRepository')
const app = express()
const port = 3000

router.post('/survey', new SurveyController().post)
router.put('/survey', new SurveyController().put)
router.get('/survey/:name', new SurveyController().get)
const container = new Container('surveyMaven', app)
container.register('surveyRepository', SurveyRepository)

//Container.create(definitions)

app.use(bodyParser.json({ extended: true }))
app.use(router)

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`)
})
