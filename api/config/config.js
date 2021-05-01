const definitions = [
    {
        name: 'surveyRepository',
        factory: () => {
            return {
                surveyRepository: require('../repositories/surveyRepository'),
            }
        },
    },
]

module.exports = definitions
