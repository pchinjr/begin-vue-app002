// system imports
// 3rd party imports
const data = require('@begin/data')
// local imports
const { parse64 } = require('@architect/shared/helpers')

exports.handler = async function http(req) {
  const key = req.pathParameters.uuid
  const post = JSON.parse(parse64(req.body))

  const table = 'posts'
  const result = await data.set({ table, key, post })

  return {
    headers: { 'content-type': 'application/json' },
    body: JSON.stringify(result),
  }
}