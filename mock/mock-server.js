const user = require('./user')

const mocks = [user]

function registerRoutes(app) {
  mocks.map(mock => {
    console.log('mock: ', mock)
    app['post'](mock.url, mock.response)
  })
}

module.exports = app => {
  registerRoutes(app)
}
