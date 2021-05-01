var Validator = require('jsonschema').Validator
var validator = new Validator()

let survey = require('./surveySchema')

validator.addSchema(survey, '/Survey')

module.exports = validator
