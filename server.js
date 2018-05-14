const app = require('express')()
const http = require('http').Server(app)

const port = process.env.PORT || 4050

app.use((req, res, next) => {
    console.log(new Date(), '[REST API]', req.method, req.path, req.body)
    next()
})

app.get('/', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/src/img/index.html')
})

app.get('/img', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/src/img/index.html')
})

app.get('/cam', (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname + '/src/cam/index.html')
})

app.get('/pico.js', (req, res) => {
    res.sendFile(__dirname + '/pico.js')
})

// img
app.get('/img/*', (req, res) => {
    res.sendFile(__dirname + '/src' + req.path)
})

// cam
app.get('/cam/*', (req, res) => {
    res.sendFile(__dirname + '/src' + req.path)
})

console.log('Starting server ..')
http.listen(port, () => {
    console.log(`Server running on port ${port}`)
})