const express = require('express')
const path = require('path')

const app = express()
const port = 3000

app.use('/', express.static(path.join(__dirname, '../build')))
app.use('/static', express.static(path.join(__dirname, '../build')))
app.use(/^\/(?!(static|api)).*$/, express.static(path.join(__dirname, '../build')))

app.get('/api/dummy', (req, res) => {
    res.json({status: 'ok', data: {a: [1, 2, 3]}})
})

app.get('/api/dummy2', (req, res) => {
    res.json({status: 'ok', data: {a: [3, 4, 5]}})
})

app.listen(port, () => console.log(`Example app listening on port ${port}!`))