const BaseController = require('./baseController')
const SingleAnswerValidator = require('../validators/singleAnswerValidator')

class SingleAnswerController extends BaseController {
    build(req, res) {
        if (req.body) {
            const v = new SingleAnswerValidator(req.body)
            try {
                if (v.isValid()) {
                    res.status(201)
                    return res.send('Created')
                } else {
                    res.status(400)
                    return res.send('Invalid question')
                }
            } catch (error) {
                console.log(error)
            }
        }
    }
}

module.exports = SingleAnswerController
