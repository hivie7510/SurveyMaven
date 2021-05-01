const db = require('./db')
const mongoose = require('mongoose')
const surveySchema = require('./schemas/survey')

class SurveyRepository {
    add(survey) {
        const Survey = mongoose.model('Survey', surveySchema)
        const _survey = new Survey(survey)

        _survey.save(function (err, _survey) {
            if (err) return console.error(err)
        })
        return _survey
    }
}

module.exports = new SurveyRepository()
