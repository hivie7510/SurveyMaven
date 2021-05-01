const BaseController = require('./baseController')
const validator = require('../validators/schemas')

class SurveyController extends BaseController {
    build(req, res) {
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
                    return res.send(`Invalid question:  ${validation}`)
                }
            } catch (error) {
                res.status(500)
                console.log(error)
                return res.send(error)
            }
        }
    }
}

module.exports = SurveyController
