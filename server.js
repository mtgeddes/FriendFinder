
let express = require('express')
let bodyParser = require('body-parser')

let app = express()

let PORT = process.env.PORT || 8080

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())


require('./app/routing/apiRoutes')(app)
require('./app/routing/htmlRoutes')(app)

app.listen(PORT, function() {
  console.log('App listening on PORT: ' + PORT)
})
