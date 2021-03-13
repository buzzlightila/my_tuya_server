const express = require('express')
var bodyParser = require('body-parser')
const TuyaLamp = require('./tuya')
const app = express()
const port = 8080
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: true
}))

app.post('/:deviceId', (req, res) => {
    let { params, body } = req
    params = { ...params, ...body }
    TuyaLamp(params)
    res.send('')
})

app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}`)
})

