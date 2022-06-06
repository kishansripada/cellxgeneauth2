const express = require('express')
const app = express()
const port = process.env.PORT || 3000
var path = require('path');
app.use(express.static("public"));



app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, './public', 'index.html'));
})


app.get('/app', (req, res) => {

    res.sendFile(path.join(__dirname, 'test.html'))

})


app.get('/login/:password', (req, res) => {
    if (req.params.password == "fadhl") {
        res.send(true)
    } else {
        res.send(false)
    }
})






app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
