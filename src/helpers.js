const parse64 = (input) => {
  return Buffer.from(input, 'base64').toString()
}

module.exports = {
  parse64,
}