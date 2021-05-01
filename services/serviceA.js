const Container = require('@arckinteractive/express-ioc').Container

const definitions = [
    {
        name: 'serviceA',
        factory: () => {
            return {
                foo: process.env.FOO,
            }
        },
    },
    {
        name: 'serviceF',
        factory: (serviceA) => {
            return `I am not a ${serviceA.foo}`
        },
        dependencies: ['serviceA'],
        options: {
            scoped: true,
        },
    },
]

const services = Container.create(definitions)

class ServiceBConstructor {
    constructor(serviceA) {
        this.serviceA = service
    }

    doStuff() {}
}

const serviceC = {}

// Scoped service (bound to a specific express request, e.g. session)
const serviceD = (serviceA) => {
    return {}
}

services.register('serviceB', ServiceBConstructor, ['serviceA'])
services.register('serviceC', () => serviceC)
services.register('serviceD', serviceD, ['serviceA', 'serviceC'], {
    scoped: true,
})

const serviceA = services.get('serviceA')
// or
const { serviceB } = services

export default (req, res, next) => {
    const services = req.app.get('services')

    services.serviceA.doStuff()

    next()
}

const { express } = services

express.use(middleware)

module.exports = express
