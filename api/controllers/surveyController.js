const BaseController = require('./baseController')
const validator = require('../validators/schemas')

class SurveyController extends BaseController {
    post(req, res) {
        const services = req.app.get('services')
        if (req.body) {
            try {
                let d = require('../validators/surveySchema.json')
                let validation = validator.validate(req.body, d)
                if (validation.valid) {
                    const survey = {
                        ...req.body,
                        name: `${req.body.username}:${req.body.name}`,
                    }
                    let s = services.get('surveyRepository')
                    let _survey = s.add(survey)
                    res.status(201)
                    res.json(_survey)
                } else {
                    res.status(400)
                    return res.send(`${validation}`)
                }
            } catch (error) {
                res.status(500)
                console.log(error)
                return res.send(error)
            }
        }
    }

    async put(req, res) {
        const services = req.app.get('services')
        if (req.body) {
            try {
                let d = require('../validators/surveySchema.json')
                let validation = validator.validate(req.body, d)
                if (validation.valid) {
                    const survey = {
                        ...req.body,
                    }
                    let s = services.get('surveyRepository')
                    let _survey = await s.update(survey)
                    res.status(204)
                    res.json(_survey)
                } else {
                    res.status(400)
                    return res.send(`${validation}`)
                }
            } catch (error) {
                res.status(500)
                console.log(error)
                return res.send(error)
            }
        }
    }

    async get(req, res) {
        const services = req.app.get('services')
        if (req.body) {
            try {
                let s = services.get('surveyRepository')
                let _survey = await s.get(req.params.name)
                res.status(200)
                res.json(_survey)
            } catch (error) {
                res.status(500)
                console.log(error)
                return res.send(error)
            }
        }
    }
}

module.exports = SurveyController
