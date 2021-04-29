class SingleAnswerValidator {
    constructor(question) {
        this._question = question
    }

    /**
     * Validates the single answer type
     * expects
     * {
     *  title:'',
     *  explanation:'',
     *  values : []
     * }
     * @return boolean
     */
    isValid() {
        return this.hasTitle()
    }

    hasTitle() {
        return this._question.hasOwnProperty('title')
    }
}

module.exports = SingleAnswerValidator
