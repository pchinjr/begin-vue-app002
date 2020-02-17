@app
dimsum-af6

@static
folder dist

@http
get /api
get /api/posts
get /

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
