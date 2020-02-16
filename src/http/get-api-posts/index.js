// learn more about HTTP functions here: https://arc.codes/primitives/http
// system imports
// 3rd party imports
const data = require('@begin/data')
// local imports

exports.handler = async function http(req) {
  const table = 'posts'
  const posts = await data.get({ table })

  return {
    statusCode: 200,
    body: JSON.stringify(posts),
  }
}