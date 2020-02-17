// system imports
// 3rd party imports
const data = require('@begin/data')
// local imports

exports.handler = async function http(req) {
  const key = req.pathParameters.uuid

  const table = 'posts'
  const res = await data.destroy({ table, key })

  return {
    statusCode: 204,
    body: ''
  }
}