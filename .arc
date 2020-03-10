# Warning! Do Not Edit
# --------------------
# This is a generated file and will be overwritten

@app
invent-lj1

@static
folder dist
@http
get /api
get /api/posts
post /api/posts
put /api/posts/:uuid
delete /api/posts/:uuid

@tables
data
  scopeID *String
  dataID **String
  ttl TTL
