@app
dimsum-af6

@static
folder dist

@http
get /api
get /api/posts
get /
post /api/posts
put /api/posts/:uuid
delete /api/posts/:uuid

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
