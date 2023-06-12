const express = require('express')
const app = express()

app.use(express.urlencoded({extended: true}))
app.use(express.json)


require('./config/mongoose.config')
require('./routes/tracker.routes')(app)

app.listen(8000,() => console.log("connected to port 8000!"))