const db = require('./db')
const mongoose = require('mongoose')
const surveySchema = require('./schemas/survey')

class SurveyRepository {
    async add(survey) {
        const Survey = mongoose.model('Survey', surveySchema)
        const _survey = new Survey(survey)

        await _survey.save(function (err, _survey) {
            if (err) return console.error(err)
        })
        return _survey
    }

    async update(survey) {
        const Survey = mongoose.model('Survey', surveySchema)
        const _survey = new Survey(survey)
        const _id = survey._id

        const doc = await Survey.findById(_id)
        doc.overwrite(_survey)
        await doc.save()
    }

    async get(name) {
        const Survey = mongoose.model('Survey', surveySchema)
        const doc = await Survey.findOne({ name: name })
        return doc
    }
}

module.exports = new SurveyRepository()
