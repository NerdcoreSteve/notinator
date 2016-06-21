var express = require('express')  
var app = express()
var body_parser = require('body-parser')

app.use(body_parser.urlencoded({extended: false}))
app.use(body_parser.json())

app.get('/', function (req, res) {  
    res.send('Wazzup?')
})

app.get('/hey', function (req, res) {  
    res.send('Hey Yourself!')
})

app.post('/send-info', function (req, res) {  
    console.log(req.body)
    res.json({
        message: req.body.info ? `info was ${req.body.info}` : 'No info!'
    })
})

app.listen(3000, function () {  
    console.log('Example app listening on port 3000!')
})
