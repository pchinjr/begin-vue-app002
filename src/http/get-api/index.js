exports.handler = async function http(req) {
  console.log('Begin API called')
  return {
    headers: { 'content-type': 'application/json; charset=utf8' },
    body: JSON.stringify({
      message: 'you find this in src/http/get-api'
    })
  }
}
